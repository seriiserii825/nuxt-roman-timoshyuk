<script setup lang="ts">
const form = ref({
  title: "",
  amount: 0,
  category_id: null as number | null,
});

function onFormSubmit() {
  console.log(form.value);
}
</script>

<template>
  <div class="shape">
    <Form
      v-slot="$form"
      @submit="onFormSubmit"
      class="flex flex-col justify-center gap-4"
    >
      <div class="flex flex-col gap-1">
        <label for="title" class="label">Title: </label>
        <InputText
          v-model="form.title"
          name="form_title"
          id="title"
          type="text"
          placeholder="Title"
        />
        <Message
          v-if="$form.title?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.title.error?.message }}</Message
        >
      </div>
      <div class="flex justify-between gap-4">
        <div class="w-full flex flex-col gap-1">
          <label for="amount" class="label">Amount: </label>
          <InputNumber
            v-model="form.amount"
            name="form_amount"
            id="amount"
            placeholder="Amount"
            fluid
            mode="currency"
            currency="USD"
            locale="en-US"
          />
          <Message
            v-if="$form.amount?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.amount.error?.message }}</Message
          >
        </div>
        <div class="w-full flex flex-col gap-1">
          <label for="category" class="label">Category: </label>
          <Dropdown
            v-model="form.category_id"
            :options="[
              { label: 'Food', value: 1 },
              { label: 'Transport', value: 2 },
              { label: 'Utilities', value: 3 },
            ]"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a category"
            id="category"
          />
          <Message
            v-if="$form.category_id?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.category_id.error?.message }}</Message
          >
        </div>
      </div>
      <Button type="submit" severity="secondary" label="Submit" />
    </Form>
  </div>
</template>
