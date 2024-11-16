/**
 * A styled component for typography that applies theme-based styles and responsive text.
 *
 * @component
 * @param {TypographyProps} props - Component props
 * @param {keyof Theme['typography']} props.as - The typography variant to use from theme
 * @returns {JSX.Element} A styled div with applied typography styles
 *
 * @example
 * ```tsx
 * <Typography as="h1">Heading</Typography>
 * <Typography as="body1">Body text</Typography>
 * ```
 */

import { responsiveText } from '@styles/mixins';
import styled from 'styled-components';

interface TypographyProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small';
}

const Typography = styled.div<TypographyProps>`
  ${(props) => props.theme.typography[props.as]};
  ${responsiveText};
  color: ${(props) => props.theme.colors.text};
`;

export default Typography;
