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
