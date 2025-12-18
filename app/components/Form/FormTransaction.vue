<script setup lang="ts">
import { categoryService } from "~/api/services/categoryService";
import type { ICategoriesResponse } from "~/interfaces/ICategoriesResponse";
import type { ISelectOption } from "~/interfaces/ISelectOption";

const categories_response = ref<ICategoriesResponse[]>([]);

const form = ref({
  title: "",
  amount: 0,
  type: "income",
  category: "",
});

const categories = ref<ISelectOption[]>();

async function fetchCategories() {
  try {
    const response = await categoryService.getAll();
    const data = response.data;
    if (data) {
      categories.value = data.map((category: ICategoriesResponse) => ({
        text: category.title,
        value: category.id,
      }));
    }
  } catch (error) {}
}
onMounted(() => {
  fetchCategories();
});
</script>

<template>
  <div class="shape">
    <h2 class="mb-4 text-lg font-semibold">Add New Transaction</h2>
    <div class="mb-8 grid grid-cols-2 gap-3">
      <FormInput
        label="Title"
        name="title"
        placeholder="Enter transaction title"
        v-model="form.title"
      />

      <FormInput
        label="Amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
        v-model="form.amount"
      />
    </div>
    <div class="label">Type:</div>
    <div class="mb-8 flex items-center gap-2">
      <label class="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          value="income"
          v-model="form.type"
          class="form-radio text-blue-600"
        />
        <span>Income</span>
      </label>
      <label class="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          value="expense"
          v-model="form.type"
          class="form-radio text-blue-600"
        />
        <span>Expense</span>
      </label>
    </div>
    <FormSelect
      v-if="categories"
      label="Manage Category"
      name="category"
      :options="categories"
      v-model="form.category"
      class="mb-8"
    />
    <Btn type="submit" class="w-fit" variant="btn-success">Add Transaction</Btn>
  </div>
</template>
