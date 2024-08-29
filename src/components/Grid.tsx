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
