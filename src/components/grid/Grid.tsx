/**
 * A styled grid component that provides customizable layout using CSS Grid.
 *
 * @component
 * @param {GridProps} props - The props for the Grid component
 * @param {string | number} props.columns - Defines the number of columns or column template
 * @param {string | number} props.gap - Specifies the gap between grid items
 *
 * @example
 * ```tsx
 * <Grid columns={3} gap="1rem">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 */

import { gridLayout } from '@styles/mixins';
import styled from 'styled-components';

interface GridProps {
  columns: number;
  gap?: string;
}

const Grid = styled.div<GridProps>`
  ${(props) => gridLayout(props.columns, props.gap)};
`;

export default Grid;
