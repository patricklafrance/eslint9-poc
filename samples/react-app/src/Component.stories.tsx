import type { Meta, StoryObj } from "storybook-react-rsbuild";

// TEST SCENARIO:
// To test CSF: Uncomment // title: "test"
// To test flat/components: Comment out "export default meta"

interface ComponentProps {
    text: string;
}

function Component({ text = "Hello!" }: ComponentProps) {
    return (
        <div>{text}</div>
    );
}

const meta = {
    // title: "test",
    component: Component,
    render: props => {
        return (
            <Component {...props} />
        );
    }
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
        text: "Hello from the story!"
    }
} satisfies Story;
