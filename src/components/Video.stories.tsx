import Video from "./Video";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Video> = {
  component: Video,
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Primary: Story = {};
