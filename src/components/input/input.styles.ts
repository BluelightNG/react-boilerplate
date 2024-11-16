import { css } from 'styled-components';

export const inputSizes = {
  small: '32px',
  medium: '40px',
  large: '48px',
} as const;

export const fontSizes = {
  small: '0.875rem',
  medium: '1rem',
  large: '1.125rem',
} as const;

export const inputStateMixin = css`
  &:hover {
    border-color: #94a3b8;
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &:disabled {
    background-color: #f1f5f9;
    border-color: #e2e8f0;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

export const inputErrorMixin = css`
  border-color: #ef4444;

  &:hover,
  &:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
`;

export const labelMixin = css<{ $error?: boolean }>`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${(props) => (props.$error ? '#ef4444' : '#1f2937')};
  transition: color 0.2s;
`;

export const helperTextMixin = css<{ $error?: boolean }>`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => (props.$error ? '#ef4444' : '#64748b')};
`;
