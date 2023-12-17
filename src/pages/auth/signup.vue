<script setup lang="ts">
import { Form } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/valibot';
import { email, minLength, object, string } from 'valibot';
import { CyrForm } from '@/components/shared/Form';
import { CyrButton } from '@/components/shared/Button';
import { CyrField, CyrPasswordField } from '@/components/shared/Input';

definePageMeta({
  layout: 'auth',
});

const schema = toTypedSchema(
  object({
    name: string([minLength(1, 'required')]),
    email: string([minLength(1, 'required'), email()]),
    password: string([minLength(1, 'required')]),
  }),
);
</script>

<template>
  <div>
    <CyrForm>
      <h3>Sign up</h3>
      <CyrField name="name" label="Name" />
      <CyrField name="email" label="Email" />
      <CyrPasswordField name="password" label="Password" />
      <template #buttons>
        <CyrButton variant="solid" full> Create account </CyrButton>
      </template>
      <template #footer>
        <NuxtLink to="/auth/login"> Already have an account? Login </NuxtLink>
      </template>
    </CyrForm>
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
