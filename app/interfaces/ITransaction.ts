export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
}
export type ICategory = {
  id: number;
  title: string;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
};
export type IUser = {
  id: number;
};
