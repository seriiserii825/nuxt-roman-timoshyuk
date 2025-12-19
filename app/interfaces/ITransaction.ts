export interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: ICategory;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
}
export type ICategory = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};
export type IUser = {
  id: number;
  email: string;
};
