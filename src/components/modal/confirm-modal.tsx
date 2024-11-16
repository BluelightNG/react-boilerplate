import { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { Modal } from './modal';

const contentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmModal = memo<ConfirmModalProps>(
  ({ isOpen, onClose, onConfirm, title, message }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Content variants={contentVariants} initial="hidden" animate="visible">
        <IconWrapper variants={itemVariants}>
          <AlertTriangle size={48} />
        </IconWrapper>
        <Title variants={itemVariants}>{title}</Title>
        <Message variants={itemVariants}>{message}</Message>
        <ButtonGroup variants={itemVariants}>
          <Button
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={onConfirm}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Confirm
          </Button>
        </ButtonGroup>
      </Content>
    </Modal>
  ),
);

ConfirmModal.displayName = 'ConfirmModal';

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
`;

const IconWrapper = styled(motion.div)`
  color: #f59e0b;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
`;

const Message = styled(motion.p)`
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled(motion.button)<{ variant?: 'danger' | 'cancel' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  ${({ variant }) =>
    variant === 'danger'
      ? `
    background-color: #ef4444;
    color: white;
    &:hover {
      background-color: #dc2626;
    }
  `
      : `
    background-color: #e5e7eb;
    color: #374151;
    &:hover {
      background-color: #d1d5db;
    }
  `}
`;
