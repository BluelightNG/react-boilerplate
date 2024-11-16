import { css } from 'styled-components';

// Flexbox Centering
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Common Button Styles
export const buttonStyles = css`
  padding: ${(props) => props.theme.spacing.md};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typography.body};
  cursor: pointer;
  border: none;
  color: ${(props) => props.theme.colors.background};

  &:hover {
    filter: brightness(0.9);
  }
`;

// Box Shadow
export const boxShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Responsive Text
export const responsiveText = css`
  font-size: ${(props) => props.theme.typography.body};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.typography.small};
  }
`;

// Grid Layouts
export const gridLayout = (columns: number, gap: string = '16px') => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${gap};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(${columns > 2 ? 2 : 1}, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

// Animation Utilities
export const fadeIn = css`
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const slideUp = css`
  animation: slideUp 0.5s ease-in-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Margin and Padding Utilities
export const margin = (
  top: string,
  right: string = top,
  bottom: string = top,
  left: string = right,
) => css`
  margin: ${top} ${right} ${bottom} ${left};
`;

export const padding = (
  top: string,
  right: string = top,
  bottom: string = top,
  left: string = right,
) => css`
  padding: ${top} ${right} ${bottom} ${left};
`;
