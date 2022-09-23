import "styled-components";

type Color = {
  default: string;
  hover: {
    background: string;
    text: string;
    borderColor: string;
  };
  disabled: string;
  focus: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: Color;
      secondary: Color;
      success: Color;
      danger: Color;
      warning: Color;
      info: Color;
    };
    textColor: string;
    bgColor: string;
  }
}
