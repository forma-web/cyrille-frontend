<script setup lang="ts">
import { CyrField, CyrPasswordField } from '@shared/ui/Input';
import { CyrForm } from '@shared/ui/Form';
import { CyrButton } from '@shared/ui/Button';
import { loginSchema } from '@entities/Auth';
import { useHandleForm } from '@shared/lib/composables/useHandleForm';

const { onSubmit } = useHandleForm({
  schema: loginSchema,
  handler: (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  },
});
</script>

<template>
  <CyrForm @submit="onSubmit">
    <h3>Welcome back!</h3>
    <CyrField name="email" label="Email" autocomplete="email" />
    <CyrPasswordField
      name="password"
      label="Password"
      autocomplete="current-password"
    />
    <template #buttons>
      <CyrButton type="submit" variant="solid" full>
        Login
      </CyrButton>
      <CyrButton variant="outline" full>
        Forgot password?
      </CyrButton>
    </template>
    <template #footer>
      <NuxtLink to="/auth/signup">
        Don't have an account? Sign up
      </NuxtLink>
    </template>
  </CyrForm>
</template>
