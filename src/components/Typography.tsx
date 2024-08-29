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
