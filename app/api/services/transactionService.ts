import type {ITransactionPayload} from "~/interfaces/ITransactionPayload";

export const transactionService = {
  getAll: async () => {
    const { $axios } = useNuxtApp();
    return $axios.get("/transactions");
  },
  create: async (payload: ITransactionPayload) => {
    const { $axios } = useNuxtApp();
    return $axios.post("/transactions", payload);
  },
  update: async (id: number, payload: any) => {
    const { $axios } = useNuxtApp();
    return $axios.put(`/transactions/${id}`, payload);
  },
  delete: async (id: number) => {
    const { $axios } = useNuxtApp();
    return $axios.delete(`/transactions/${id}`);
  }
};
