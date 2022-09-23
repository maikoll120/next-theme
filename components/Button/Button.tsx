import React, { ReactNode } from "react";
import { StyledButton } from "./Button.style";
import { UIColor, UISize } from "../../models/ui.model";

export type ButtonSizeProps = {
  fontSize: string;
  padding: string;
};

type ButtonSizeMap = {
  small: ButtonSizeProps;
  normal: ButtonSizeProps;
  large: ButtonSizeProps;
};

const sizeMap: ButtonSizeMap = {
  small: {
    fontSize: "0.75rem",
    padding: "0.5rem 1.25rem",
  },
  normal: {
    fontSize: "1rem",
    padding: "0.75rem 1.5rem",
  },
  large: {
    fontSize: "1.25rem",
    padding: "1rem 1.75rem",
  },
};

type Props = {
  type?: "submit" | "reset" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant?: UIColor;
  size?: UISize;
  disabled?: boolean;
};

const Button = ({
  type = "button",
  onClick,
  children,
  variant = "primary",
  size = "normal",
  disabled = false,
}: Props) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      buttonSizeProps={sizeMap[size]}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
