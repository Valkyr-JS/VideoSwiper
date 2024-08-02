import type { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta: Meta<typeof App> = {
  component: App,
  args: {
    allVideos: [
      {
        id: "3191",
        videoURL: "http://192.168.0.20:9990/scene/3191/stream",
      },
      {
        id: "2721",
        videoURL: "http://192.168.0.20:9990/scene/2721/stream",
      },
      {
        id: "4339",
        videoURL: "http://192.168.0.20:9990/scene/4339/stream",
      },
      {
        id: "3346",
        videoURL: "http://192.168.0.20:9990/scene/3346/stream",
      },
      {
        id: "3155",
        videoURL: "http://192.168.0.20:9990/scene/3155/stream",
      },
      {
        id: "4505",
        videoURL: "http://192.168.0.20:9990/scene/4505/stream",
      },
      {
        id: "3076",
        videoURL: "http://192.168.0.20:9990/scene/3076/stream",
      },
      {
        id: "3173",
        videoURL: "http://192.168.0.20:9990/scene/3173/stream",
      },
      {
        id: "4039",
        videoURL: "http://192.168.0.20:9990/scene/4039/stream",
      },
      {
        id: "3120",
        videoURL: "http://192.168.0.20:9990/scene/3120/stream",
      },
      {
        id: "4584",
        videoURL: "http://192.168.0.20:9990/scene/4584/stream",
      },
      {
        id: "4521",
        videoURL: "http://192.168.0.20:9990/scene/4521/stream",
      },
      {
        id: "4361",
        videoURL: "http://192.168.0.20:9990/scene/4361/stream",
      },
      {
        id: "4472",
        videoURL: "http://192.168.0.20:9990/scene/4472/stream",
      },
      {
        id: "3111",
        videoURL: "http://192.168.0.20:9990/scene/3111/stream",
      },
      {
        id: "3140",
        videoURL: "http://192.168.0.20:9990/scene/3140/stream",
      },
      {
        id: "4791",
        videoURL: "http://192.168.0.20:9990/scene/4791/stream",
      },
      {
        id: "4415",
        videoURL: "http://192.168.0.20:9990/scene/4415/stream",
      },
      {
        id: "3079",
        videoURL: "http://192.168.0.20:9990/scene/3079/stream",
      },
      {
        id: "4221",
        videoURL: "http://192.168.0.20:9990/scene/4221/stream",
      },
      {
        id: "4016",
        videoURL: "http://192.168.0.20:9990/scene/4016/stream",
      },
      {
        id: "3194",
        videoURL: "http://192.168.0.20:9990/scene/3194/stream",
      },
      {
        id: "4409",
        videoURL: "http://192.168.0.20:9990/scene/4409/stream",
      },
      {
        id: "4416",
        videoURL: "http://192.168.0.20:9990/scene/4416/stream",
      },
      {
        id: "4541",
        videoURL: "http://192.168.0.20:9990/scene/4541/stream",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};
