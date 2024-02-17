<script setup lang="ts">
import { CyrField, CyrPasswordField } from '@shared/ui/Input';
import { CyrForm } from '@shared/ui/Form';
import { CyrButton } from '@shared/ui/Button';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/valibot';
import { loginSchema } from '@entities/Auth';
import type { LoginValues } from '@entities/Auth/types';

const { handleSubmit } = useForm<LoginValues>({
  // TODO: update vee validate to fix types
  // @ts-ignore
  validationSchema: toTypedSchema(loginSchema),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <CyrForm @submit="onSubmit">
    <h3>Welcome back!</h3>
    <CyrField name="email" label="Email" />
    <CyrPasswordField name="password" label="Password" />
    <template #buttons>
      <CyrButton type="submit" variant="solid" full> Login</CyrButton>
      <CyrButton variant="outline" full> Forgot password?</CyrButton>
    </template>
    <template #footer>
      <NuxtLink to="/auth/signup"> Don't have an account? Sign up</NuxtLink>
    </template>
  </CyrForm>
</template>
