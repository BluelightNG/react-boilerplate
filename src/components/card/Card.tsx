/**
 * A styled div component that creates a card-like element with hover effects.
 *
 * @component
 * @styled
 *
 * @implements {boxShadow} - Applies box shadow styling
 * @implements {fadeIn} - Applies fade-in animation
 * @implements {margin} - Applies margin of 16px top/bottom and 8px left/right
 * @implements {padding} - Applies padding of 16px on all sides
 *
 * @property {string} theme.colors.background - Background color from theme
 *
 * @styles
 * - Border radius: 8px
 * - Transition: transform effect on hover
 * - Hover: Translates card 5px upward
 *
 * @example
 * ```tsx
 * <Card>
 *   {children}
 * </Card>
 * ```
 */

import { boxShadow, fadeIn, margin, padding } from '@styles/mixins';
import styled from 'styled-components';

const Card = styled.div`
  ${boxShadow};
  ${fadeIn};
  ${margin('16px', '8px')};
  ${padding('16px')};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default Card;
