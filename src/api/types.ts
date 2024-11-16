export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface ErrorResponse {
  message: string;
  code?: string;
  details?: any;
}

// Example usage of types with the API client
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}
