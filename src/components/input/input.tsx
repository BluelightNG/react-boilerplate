import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react';
import {
  fontSizes,
  helperTextMixin,
  inputErrorMixin,
  inputSizes,
  inputStateMixin,
  labelMixin,
} from './input.styles';

type InputSize = keyof typeof inputSizes;

interface StyledInputProps {
  $size: InputSize;
  $error?: boolean;
  $hasIcon?: boolean;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  size?: InputSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'medium',
      icon,
      iconPosition = 'right',
      onIconClick,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';

    const handlePasswordToggle = () => {
      setShowPassword((prev) => !prev);
    };

    const renderIcon = () => {
      if (isPassword) {
        return (
          <IconWrapper $position="right" onClick={handlePasswordToggle}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </IconWrapper>
        );
      }

      if (icon) {
        return (
          <IconWrapper $position={iconPosition} onClick={onIconClick}>
            {icon}
          </IconWrapper>
        );
      }

      return null;
    };

    return (
      <InputWrapper>
        {label && <Label $error={error}>{label}</Label>}
        <StyledInput
          ref={ref}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          $size={size}
          $error={error}
          $hasIcon={Boolean(icon) || isPassword}
          {...props}
        />
        {renderIcon()}
        {helperText && <HelperText $error={error}>{helperText}</HelperText>}
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.label<{ $error?: boolean }>`
  ${labelMixin}
`;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: ${(props) => inputSizes[props.$size]};
  padding: 0 ${(props) => (props.$hasIcon ? '2.5rem' : '1rem')};
  font-size: ${(props) => fontSizes[props.$size]};
  border: 1.5px solid #cbd5e1;
  border-radius: 0.375rem;
  background-color: white;
  color: #1f2937;
  transition: all 0.2s;

  ${inputStateMixin}
  ${(props) => props.$error && inputErrorMixin}
`;

const HelperText = styled.span<{ $error?: boolean }>`
  ${helperTextMixin}
`;

const IconWrapper = styled.div<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${(props) => props.$position}: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: #64748b;
  cursor: pointer;

  &:hover {
    color: #475569;
  }
`;
