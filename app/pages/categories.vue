<script setup lang="ts">
import { categoryService } from "~/api/services/categoryService";
import useSweetAlert from "~/composable/useSweetAlert";
import type { ICategoriesResponse } from "~/interfaces/ICategoriesResponse";
definePageMeta({
  middleware: "auth",
});
const create_category_form = ref({
  title: "",
});
const is_loading = ref(false);
const selected_category_id = ref<number | null>(null);
const is_creating_category = ref(true);
const categories = ref<ICategoriesResponse[]>([]);
const is_visible_category_popup = ref(false);
async function createCategory() {
  try {
    await categoryService.create({
      title: create_category_form.value.title,
    });
    is_visible_category_popup.value = false;
    useSweetAlert("success", "Category created successfully");
    create_category_form.value.title = "";
    await getCategories();
  } catch (error) {
    handleAxiosError(error);
  }
}
async function getCategories() {
  is_loading.value = true;
  try {
    const response = await categoryService.getAll();
    categories.value = response.data;
  } catch (error) {
    handleAxiosError(error);
  } finally {
    setTimeout(() => {
      is_loading.value = false;
    }, 800);
  }
}
async function updateCategory() {
  if (selected_category_id.value === null) return;
  try {
    await categoryService.update(selected_category_id.value, {
      title: create_category_form.value.title,
    });
    useSweetAlert("success", "Category updated successfully");
    await getCategories();
    is_visible_category_popup.value = false;
  } catch (error) {
    handleAxiosError(error);
  }
}
function updateFunc(categoryId: number) {
  const category = categories.value.find((cat) => cat.id === categoryId);
  if (!category) return;
  is_creating_category.value = false;
  selected_category_id.value = categoryId;
  create_category_form.value.title = category.title;
  is_visible_category_popup.value = true;
}
const deleteCategory = async (id: number) => {
  const result = await useSweetConfirm(
    "Delete category?",
    "This action cannot be undone",
    "Delete",
    "Cancel",
  );
  if (!result.isConfirmed) return;
  await categoryService.delete(id);
  await getCategories();
  useSweetAlert("success", "Category deleted");
};
onMounted(() => {
  getCategories();
});
</script>
<template>
  <div class="mt-10 rounded-md bg-slate-800 p-4">
    <div class="mt-2 flex flex-wrap items-center gap-2">
      <Preloader v-if="is_loading" />
      <template v-else-if="categories && categories.length > 0">
        <div
          v-for="category in categories"
          :key="category.id"
          class="group relative flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2"
        >
          <span>{{ category.title }}</span>
          <div
            class="pointer-events-none absolute inset-0 flex min-w-16 items-center justify-between gap-2 rounded-lg bg-black/90 px-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <font-awesome-icon
              @click="updateFunc(category.id)"
              :icon="['fas', 'pen-to-square']"
              class="inline-block cursor-pointer text-white transition-all hover:scale-110 hover:text-blue-400"
            />
            <font-awesome-icon
              @click="deleteCategory(category.id)"
              :icon="['fas', 'trash']"
              class="inline-block cursor-pointer text-white transition-all hover:scale-110 hover:text-red-600"
            />
          </div>
        </div>
      </template>
    </div>
    <div
      @click="is_visible_category_popup = true"
      class="mb-4 mt-4 flex cursor-pointer items-center gap-1 text-white/50 transition-colors hover:text-white"
    >
      <font-awesome-icon icon="fa-solid fa-plus" />
      {{ is_creating_category ? "Create new category" : "Update category" }}
    </div>
    <CustomModal
      title="Create category"
      v-model:is_visible="is_visible_category_popup"
    >
      <div class="mb-4 flex items-center gap-4">
        <input
          id="category"
          v-model="create_category_form.title"
          placeholder="Category title"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <Btn
        :disabled="create_category_form.title.length === 0"
        @emit_click="is_creating_category ? createCategory() : updateCategory()"
      >
        Submit
      </Btn>
    </CustomModal>
  </div>
</template>
