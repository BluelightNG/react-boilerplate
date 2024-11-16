export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}
