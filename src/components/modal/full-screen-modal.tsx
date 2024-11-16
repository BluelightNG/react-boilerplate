import React, { memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Modal } from './modal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const FullscreenModal = memo<FullscreenModalProps>(
  ({ isOpen, onClose, children }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FullscreenContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <CloseButton
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Close fullscreen modal"
        >
          <X size={24} />
        </CloseButton>
        <Content
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </Content>
      </FullscreenContainer>
    </Modal>
  ),
);

FullscreenModal.displayName = 'FullscreenModal';

const FullscreenContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1100;
  overflow-y: auto;
  padding: 2rem;
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1200;

  &:hover {
    background: #e5e7eb;
  }
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3rem;
`;
