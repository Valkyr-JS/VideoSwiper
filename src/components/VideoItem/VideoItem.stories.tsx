import type { Meta, StoryObj } from "@storybook/react";

import VideoItem from "./VideoItem";

const meta: Meta<typeof VideoItem> = {
  component: VideoItem,
  args: {
    getVideos: () => {},
    id: "3112",
    index: 1,
    lastVideoIndex: 3,
    videoURL: "http://192.168.0.20:9990/scene/3112/stream",
  },
};

export default meta;
type Story = StoryObj<typeof VideoItem>;

export const Default: Story = {};
