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
