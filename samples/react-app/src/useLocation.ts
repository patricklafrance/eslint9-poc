import { useEffect, useState } from "react";

export interface LocationState {
    pathname: string;
    search: string;
    hash: string;
    full: string;
}

function getLocation(): LocationState {
    return {
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        full: window.location.href
    };
}

const LocationEventName = "wlp-widgets-location";
const WindowLocationProxyKey = "wlp-widgets-location-proxy";

// A function to dispatch our custom event.
const dispatchLocationChange = () => {
    window.dispatchEvent(new Event(LocationEventName));
};

// Wrap the history methods so they trigger our custom event.
function wrapHistoryMethod(method: typeof window.history.pushState | typeof window.history.replaceState) {
    return function (...args: Parameters<typeof method>) {
        const result = method.apply(window.history, args);
        dispatchLocationChange();

        return result;
    };
}

// augment the window object to include our custom property
declare global {
    interface Window {
        [WindowLocationProxyKey]?: boolean;
    }
}

// Global initialization to override history methods and listen for navigation events.
// This should execute only once.
if (!window[WindowLocationProxyKey]) {
    window[WindowLocationProxyKey] = true;

    // Save the original methods.
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = wrapHistoryMethod(originalPushState);
    window.history.replaceState = wrapHistoryMethod(originalReplaceState);

    // Listen for navigation events the browser triggers.
    window.addEventListener("popstate", dispatchLocationChange);
    window.addEventListener("hashchange", dispatchLocationChange);
}

/**
 * Returns the current Location. This can be useful if you'd like to perform some side effect whenever it changes.
 * This is our equivalent to the React Router useLocation hook: https://api.reactrouter.com/v7/functions/react_router.useLocation.html
 */
export function useLocation() {
    const [location, setLocation] = useState(getLocation());

    useEffect(() => {
        const onChange = () => {
            const newLocation = getLocation();
            setLocation(prev => {
                if (prev.full !== newLocation.full) {
                    return newLocation;
                }

                return prev;
            });
        };

        window.addEventListener(LocationEventName, onChange);

        return () => {
            window.removeEventListener(LocationEventName, onChange);
        };
    }, []);

    return location;
}
