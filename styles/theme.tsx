import { DefaultTheme } from "styled-components";

export type ThemeVariant = "light" | "dark";

type ThemeProps = {
  [key: string]: DefaultTheme;
};

export const themes: ThemeProps = {
  light: {
    colors: {
      primary: {
        default: "#007bff",
        hover: {
          background: "#2e6eb3",
          text: "#ffffff",
          borderColor: "#2e6eb3",
        },
        disabled: "#2e6eb3",
        focus: "#2e6eb3",
      },
      secondary: {
        default: "#6c757d",
        hover: {
          background: "#5d6063",
          text: "#ffffff",
          borderColor: "#5d6063",
        },
        disabled: "#5d6063",
        focus: "#5d6063",
      },
      success: {
        default: "#28a745",
        hover: {
          background: "#2e8041",
          text: "#ffffff",
          borderColor: "#2e8041",
        },
        disabled: "#2e8041",
        focus: "#2e8041",
      },
      danger: {
        default: "#dc3545",
        hover: {
          background: "#a83d48",
          text: "#ffffff",
          borderColor: "#a83d48",
        },
        disabled: "#a83d48",
        focus: "#a83d48",
      },
      warning: {
        default: "#ffc107",
        hover: {
          background: "#c7a02b",
          text: "#ffffff",
          borderColor: "#c7a02b",
        },
        disabled: "#c7a02b",
        focus: "#c7a02b",
      },
      info: {
        default: "#17a2b8",
        hover: {
          background: "#228392",
          text: "#ffffff",
          borderColor: "#228392",
        },
        disabled: "#228392",
        focus: "#228392",
      },
    },
    textColor: "#343a40",
    bgColor: "#f8f9fa",
  },
  dark: {
    colors: {
      primary: {
        default: "#007bff",
        hover: {
          background: "#2e6eb3",
          text: "#ffffff",
          borderColor: "#2e6eb3",
        },
        disabled: "#2e6eb3",
        focus: "#2e6eb3",
      },
      secondary: {
        default: "#6c757d",
        hover: {
          background: "#5d6063",
          text: "#ffffff",
          borderColor: "#5d6063",
        },
        disabled: "#5d6063",
        focus: "#5d6063",
      },
      success: {
        default: "#28a745",
        hover: {
          background: "#2e8041",
          text: "#ffffff",
          borderColor: "#2e8041",
        },
        disabled: "#2e8041",
        focus: "#2e8041",
      },
      danger: {
        default: "#dc3545",
        hover: {
          background: "#a83d48",
          text: "#ffffff",
          borderColor: "#a83d48",
        },
        disabled: "#a83d48",
        focus: "#a83d48",
      },
      warning: {
        default: "#ffc107",
        hover: {
          background: "#c7a02b",
          text: "#ffffff",
          borderColor: "#c7a02b",
        },
        disabled: "#c7a02b",
        focus: "#c7a02b",
      },
      info: {
        default: "#17a2b8",
        hover: {
          background: "#228392",
          text: "#ffffff",
          borderColor: "#228392",
        },
        disabled: "#228392",
        focus: "#228392",
      },
    },
    textColor: "#f8f9fa",
    bgColor: "#343a40",
  },
};
