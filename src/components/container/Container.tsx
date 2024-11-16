/**
 * A styled container component that centers its children and provides consistent spacing.
 *
 * @component
 * @example
 * ```tsx
 * <Container>
 *   <ChildComponent />
 * </Container>
 * ```
 *
 * @styled
 * @extends {div}
 * @prop {Function} flexCenter - Mixin for centering content using flex
 * @prop {Object} theme.spacing.lg - Large spacing value from theme
 * @cssProperty {string} flex-direction - Set to column
 * @cssProperty {number} max-width - Fixed at 1200px
 * @cssProperty {string} margin - Auto margins for horizontal centering
 */

import { flexCenter } from '@styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  overflow-y: scroll;
  outline: 2px solid red;
`;

export default Container;
