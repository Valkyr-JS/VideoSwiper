import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.module?.rules?.push({
      test: /\.s(a|c)ss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[name]__[local]__[hash:base64:5]",
              exportLocalsConvention: "camelCase",
            },
            sourceMap: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/constants": path.resolve(__dirname, "../src/constants/index.ts"),
        "@/hooks": path.resolve(__dirname, "../src/hooks/index.ts"),
      },
    };

    return config;
  },
};
export default config;
