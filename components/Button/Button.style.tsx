import styled from "styled-components";
import { UIColor } from "../../models/ui.model";
import { ButtonSizeProps } from "./Button";

type Props = {
  variant: UIColor;
  buttonSizeProps?: ButtonSizeProps;
};

export const StyledButton = styled.button<Props>`
  padding: ${({ buttonSizeProps }) => buttonSizeProps?.padding};
  font-size: ${({ buttonSizeProps }) => buttonSizeProps?.fontSize};
  font-family: inherit;
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;

  color: white;
  background-color: ${({ theme, variant }) => theme.colors[variant].default};
  border: 3px solid ${({ theme, variant }) => theme.colors[variant].default};

  &:hover {
    background-color: ${({ theme, variant }) =>
      theme.colors[variant].hover.background};
    border: 3px solid
      ${({ theme, variant }) => theme.colors[variant].hover.borderColor};
  }

  &:disabled {
    background-color: ${({ theme, variant }) => theme.colors[variant].disabled};
    border: 3px solid ${({ theme, variant }) => theme.colors[variant].disabled};
    cursor: default;
  }
`;
