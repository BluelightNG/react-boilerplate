import { useState, useMemo, useCallback } from 'react';
import type { SortConfig, SortDirection } from './types';

interface UseTableProps<T> {
  data: T[];
  initialPageSize: number;
  onSort?: (column: keyof T, direction: SortDirection) => void;
}

export function useTable<T>({
  data,
  initialPageSize,
  onSort,
}: UseTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  const handleSort = useCallback(
    (column: keyof T) => {
      let direction: SortDirection = 'asc';

      if (sortConfig?.key === column) {
        direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
      }

      setSortConfig({ key: column, direction });
      onSort?.(column, direction);
    },
    [sortConfig, onSort],
  );

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handlePageSizeChange = useCallback((newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  }, []);

  return {
    currentPage,
    pageSize,
    sortConfig,
    paginatedData,
    totalPages,
    handlePageChange,
    handlePageSizeChange,
    handleSort,
  };
}
