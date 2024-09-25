
export interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}

export interface GeneralResponse<T> {
  succeeded: boolean;
  message: string;
  data: T;
  code: number;
  errors?: any;
  pageMeta?: PageMeta | null;

}

export type PageMeta = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
};

export interface QueryParams{
  pageSize?:number;
  pageNumber?:number;
}

// export type NavigatorStack = {
//   href: string;
//   name: string;
// };
