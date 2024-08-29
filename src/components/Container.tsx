import { flexCenter } from '@styles/mixins';
import styled from 'styled-components';

const Container = styled.div`
  ${flexCenter};
  flex-direction: column;
  padding: ${(props) => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

export default Container;
