import { create } from "@storybook/theming";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "react-hots - A React Component library for Heroes of the Storm",
  brandUrl: "https://github.com/jamiephan/react-hots",
  brandImage:
    "https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt22b970e4cf7b4e7d/65bb1452e469d09f25837fd8/logo.webp",
  brandTarget: "_self",

  //
  colorPrimary: "#3A10E5",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#23144c",
  appContentBg: "##1d2173",
  appPreviewBg: "#ffffff",
  appBorderColor: "#23144c",
  appBorderRadius: 0,

  // Text colors
  textColor: "#ffffff",
  textInverseColor: "red",

  // Toolbar default and active colors
  barTextColor: "#ffffff",
  barSelectedColor: "#eaeaea",
  barHoverColor: "#eaeaea",
  barBg: "#23144c",

  // Form colors
  inputBg: "#23144c",
  inputBorder: "#23144c",
  inputTextColor: "#ffffff",
  inputBorderRadius: 0,
});
