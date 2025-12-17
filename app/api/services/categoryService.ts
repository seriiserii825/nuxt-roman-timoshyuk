import type { ICreateCategoryPayload } from "~/interfaces/ICreateCategoryPayload";

export const categoryService = {
  create: async (payload: ICreateCategoryPayload) => {
    const { $axios } = useNuxtApp();
    return $axios.post("/categories", payload);
  },
  getAll: async () => {
    const { $axios } = useNuxtApp();
    return $axios.get("/categories");
  }
};
