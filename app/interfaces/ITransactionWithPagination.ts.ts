import type { ITransaction } from "./ITransaction";

export interface ITransactionWithPagination {
  data: ITransaction[];
  meta: IMeta;
}
export type IMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
};
