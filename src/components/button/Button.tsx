/**
 * A styled button component with customizable variants and hover effects.
 *
 * @component
 * @param {ButtonProps} props - The props for the button component
 * @param {string} props.variant - The button variant that determines its styling
 * @returns {JSX.Element} A styled button element with theme-based styling
 *
 * @example
 * ```tsx
 * <Button variant="primary">Click me</Button>
 * ```
 */

import { boxShadow, buttonStyles } from '@styles/mixins';
import styled from 'styled-components';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger';
}
const Button = styled.button<ButtonProps>`
  ${buttonStyles};
  ${boxShadow};
  background-color: ${(props) => props.theme.buttons[props.variant].background};

  &:hover {
    background-color: ${(props) =>
      props.theme.buttons[props.variant].hover.background};
  }
`;

export default Button;
