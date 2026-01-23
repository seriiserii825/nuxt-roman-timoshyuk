export type ITransaction = {
  id: number
  title: string
  amount: number
  type: string
  category: ICategory
  createdAt: Date
  updatedAt: Date
  user: IUser
}
export type ITransactionWithoutRelations = Omit<
  ITransaction,
  'category' | 'user'
>

export type ICategory = {
  id: number
  title: string
  createdAt: Date
  updatedAt: Date
}

export type ICategoryWithTransactions = ICategory & {
  transaction: ITransactionWithoutRelations[]
}

export type IUser = {
  id: number
  email: string
}

export type ICategoryWithRating = Pick<ICategory, 'id' | 'title'> & {
  total: number
  rating: number
  color: string
}
