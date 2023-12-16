<script setup lang="ts">
import { CyrField, CyrPasswordField } from '@/components/shared/Input';
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/valibot';
import { email, minLength, object, string } from 'valibot';

definePageMeta({
  layout: 'auth',
});

const schema = toTypedSchema(
  object({
    email: string([minLength(1, 'required'), email()]),
    password: string([minLength(1, 'required')]),
  }),
);
</script>

<template>
  <div>
    <Form :validation-schema="schema">
      <CyrField name="email" label="Email" />
      <CyrPasswordField name="password" label="Password" />
    </Form>
  </div>
</template>

<style scoped lang="scss">
div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
