import { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Modal } from './modal';

interface BasicModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 },
  },
};

export const BasicModal = memo<BasicModalProps>(
  ({ isOpen, onClose, title, content }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Title variants={contentVariants} initial="hidden" animate="visible">
        {title}
      </Title>
      <Content variants={contentVariants} initial="hidden" animate="visible">
        {content}
      </Content>
    </Modal>
  ),
);

BasicModal.displayName = 'BasicModal';

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Content = styled(motion.div)`
  color: #4b5563;
  line-height: 1.6;
`;
