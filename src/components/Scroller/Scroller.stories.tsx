import type { Meta, StoryObj } from "@storybook/react";
import Scroller from "./Scroller";

const meta: Meta<typeof Scroller> = {
  component: Scroller,
  args: {
    getVideos: () => {},
    videos: [
      { id: "3385", videoURL: "http://192.168.0.20:9990/scene/3385/stream" },
      { id: "3075", videoURL: "http://192.168.0.20:9990/scene/3075/stream" },
      { id: "3112", videoURL: "http://192.168.0.20:9990/scene/3112/stream" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Scroller>;

export const Default: Story = {};
