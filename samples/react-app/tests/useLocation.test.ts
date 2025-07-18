import { act, renderHook, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { useLocation } from "../src/useLocation.ts";

// TEST SCENARIO:
// - Remove all the "expect" of a test and ESlint should show an error.

describe("useLocation hook", () => {
    afterEach(() => {
        window.history.pushState({}, "", "/");
    });

    test("when called, returns the initial location", async () => {
        act(() => screen.getByRole("button"));

        const { result } = renderHook(() => useLocation());

        expect(result.current.pathname).toBe(window.location.pathname);
        expect(result.current.full).toBe(window.location.href);
    });

    test("when pushState is called, update location", () => {
        const { result } = renderHook(() => useLocation());

        expect(result.current.pathname).toBe(window.location.pathname);
        expect(result.current.pathname).not.toBe("/new-path");

        act(() => {
            window.history.pushState({}, "", "/new-path");
        });

        expect(result.current.pathname).toBe("/new-path");
    });

    test("when pushState is called without changing the url, don't update the location", () => {
        window.history.pushState({}, "", "/path");

        const { result } = renderHook(() => useLocation());

        const originalLocation = result.current;

        act(() => {
            window.history.pushState({ data : "test" }, "", "/path");
        });

        expect(result.current).toBe(originalLocation);
    });

    test("when hashchange is called, update location", () => {
        const { result } = renderHook(() => useLocation());
        const newHash = "#new-hash";

        act(() => {
            window.location.hash = newHash;
            window.dispatchEvent(new Event("hashchange"));
        });

        expect(result.current.hash).toBe(newHash);
    });
});
