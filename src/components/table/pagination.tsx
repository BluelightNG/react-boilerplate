import { memo } from 'react';
import styled from 'styled-components';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = memo<PaginationProps>(
  ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
      const pages = [];
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PageButton
            key={i}
            $active={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PageButton>,
        );
      }

      return pages;
    };

    return (
      <Container>
        <PageButton
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          title="First page"
        >
          <ChevronsLeft size={16} />
        </PageButton>
        <PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          title="Previous page"
        >
          <ChevronLeft size={16} />
        </PageButton>

        {renderPageNumbers()}

        <PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          title="Next page"
        >
          <ChevronRight size={16} />
        </PageButton>
        <PageButton
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          title="Last page"
        >
          <ChevronsRight size={16} />
        </PageButton>

        <PageInfo>
          Page {currentPage} of {totalPages}
        </PageInfo>
      </Container>
    );
  },
);

Pagination.displayName = 'Pagination';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageButton = styled.button<{ $active?: boolean }>`
  padding: 0.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #e5e7eb;
  background: ${(props) => (props.$active ? '#3b82f6' : 'white')};
  color: ${(props) => (props.$active ? 'white' : '#374151')};
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${(props) => (props.$active ? '#2563eb' : '#f9fafb')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  color: #6b7280;
  margin: 0 0.5rem;
`;
