<script setup lang="ts">
import { categoryService } from "~/api/services/categoryService";
import { transactionService } from "~/api/services/transactionService";
import useSweetAlert from "~/composable/useSweetAlert";
import type { ICategoriesResponse } from "~/interfaces/ICategoriesResponse";
import type { ISelectOption } from "~/interfaces/ISelectOption";

const emits = defineEmits(["emit_transaction"]);

const form = ref({
  title: "",
  amount: 0,
  type: "income" as "income" | "expense",
  category: 0,
});

const categories = ref<ISelectOption[]>();

const categories_is_loading = ref(false);

async function fetchCategories() {
  try {
    categories_is_loading.value = true;
    const response = await categoryService.getAll();
    const data = response.data;
    if (data) {
      categories.value = data.map((category: ICategoriesResponse) => ({
        text: category.title,
        value: category.id,
      }));
    }
  } catch (error) {
    handleAxiosError(error);
    useSweetAlert("error", "Failed to fetch categories", "error");
  } finally {
    setTimeout(() => {
      categories_is_loading.value = false;
    }, 600);
  }
}

async function onSubmit() {
  try {
    await transactionService.create(form.value);
    useSweetAlert("success", "Transaction added successfully", "success");
    emits("emit_transaction");
    resetForm();
  } catch (error) {
    handleAxiosError(error);
    useSweetAlert("error", "Failed to add transaction", "error");
  }
}

function resetForm() {
  form.value.title = "";
  form.value.amount = 0;
  form.value.type = "income";
  form.value.category = 0;
}

const form_are_valid = computed(() => {
  return (
    form.value.title.trim() !== "" &&
    form.value.amount > 0 &&
    (form.value.type === "income" || form.value.type === "expense") &&
    form.value.category > 0
  );
});

onMounted(() => {
  fetchCategories();
});
</script>

<template>
  <div class="shape">
    <div class="mb-8 grid grid-cols-2 gap-3">
      <FormInput
        v-model="form.title"
        label="Title"
        name="title"
        placeholder="Enter transaction title"
      />

      <FormInput
        v-model="form.amount"
        label="Amount"
        name="amount"
        type="number"
        placeholder="Enter amount"
      />
    </div>
    <div class="label">Type:</div>
    <div class="mb-8 flex items-center gap-2">
      <FormRadio
        v-model="form.type"
        name="transaction-type"
        label="Income"
        value="income"
      />
      <FormRadio
        v-model="form.type"
        name="transaction-type"
        label="Expense"
        value="expense"
      />
    </div>
    <Preloader v-if="categories_is_loading" />
    <FormSelect
      v-else-if="categories"
      v-model="form.category"
      label="Manage Category"
      name="category"
      :options="categories"
      class="mb-8"
    />
    <Btn
      type="submit"
      class="w-fit"
      variant="btn-success"
      :disabled="!form_are_valid"
      @emit_click="onSubmit"
      >Add Transaction</Btn
    >
  </div>
</template>
