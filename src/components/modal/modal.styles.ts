import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
`;

export const StyledModal = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  min-width: 400px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #6b7280;
  transition: color 0.2s;
  z-index: 1;

  &:hover {
    color: #1f2937;
  }
`;
