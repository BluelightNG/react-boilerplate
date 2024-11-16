import { useMemo, useCallback, memo } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import type { Column, SortDirection } from './types';
import { RowSelector } from './row-selector';
import { Pagination } from './pagination';
import { useTable } from './use-table.hooks';

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
  pageSizeOptions?: number[];
  onSort?: (column: keyof T, direction: SortDirection) => void;
  sortable?: boolean;
  loading?: boolean;
}

function TableComponent<T extends { id: string | number }>({
  data,
  columns,
  pageSize: initialPageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  onSort,
  sortable = true,
  loading = false,
}: TableProps<T>) {
  const {
    currentPage,
    pageSize,
    sortConfig,
    paginatedData,
    totalPages,
    handlePageChange,
    handlePageSizeChange,
    handleSort,
  } = useTable<T>({
    data,
    initialPageSize,
    onSort,
  });

  const renderSortIcon = useCallback(
    (columnKey: keyof T) => {
      if (!sortable) return null;

      if (sortConfig?.key === columnKey) {
        return (
          <SortIcon>
            {sortConfig.direction === 'asc' ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </SortIcon>
        );
      }
      return (
        <SortIcon>
          <ChevronsUpDown size={16} />
        </SortIcon>
      );
    },
    [sortConfig, sortable],
  );

  const tableContent = useMemo(() => {
    if (loading) {
      return (
        <tr>
          <Td colSpan={columns.length} style={{ textAlign: 'center' }}>
            Loading...
          </Td>
        </tr>
      );
    }

    if (paginatedData.length === 0) {
      return (
        <tr>
          <Td colSpan={columns.length} style={{ textAlign: 'center' }}>
            No data available
          </Td>
        </tr>
      );
    }

    return paginatedData.map((item) => (
      <Tr key={item.id}>
        {columns.map((column) => (
          <Td key={String(column.key)}>
            {column.render ? column.render(item) : String(item[column.key])}
          </Td>
        ))}
      </Tr>
    ));
  }, [columns, loading, paginatedData]);

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <Th
                key={String(column.key)}
                onClick={() => sortable && handleSort(column.key)}
                $sortable={sortable && column.sortable !== false}
              >
                {column.header}
                {column.sortable !== false && renderSortIcon(column.key)}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </StyledTable>
      <TableControls>
        <RowSelector
          value={pageSize}
          options={pageSizeOptions}
          onChange={handlePageSizeChange}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </TableControls>
    </TableWrapper>
  );
}

export const Table = memo(TableComponent) as typeof TableComponent;

(Table as any).displayName = 'Table';

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const Th = styled.th<{ $sortable?: boolean }>`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
  background: #f9fafb;
  border-bottom: 2px solid #e5e7eb;
  cursor: ${(props) => (props.$sortable ? 'pointer' : 'default')};
  user-select: none;
  white-space: nowrap;

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const Td = styled.td`
  padding: 1rem;
  color: #4b5563;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
`;

const Tr = styled.tr`
  &:hover {
    background: #f9fafb;
  }
`;

const TableControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const SortIcon = styled.span`
  display: inline-flex;
  margin-left: 0.5rem;
  vertical-align: middle;
`;
