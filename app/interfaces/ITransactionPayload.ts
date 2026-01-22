export interface ITransactionPayload {
  title: string;
  amount: number;
  type: "income" | "expense";
  categoryId: number;
}
