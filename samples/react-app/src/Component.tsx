export interface ComponentProps {
    text: string;
}

export function Component({ text = "Hello!" }: ComponentProps) {
    return (
        <div autoFocus>{text}</div>
    );
}
