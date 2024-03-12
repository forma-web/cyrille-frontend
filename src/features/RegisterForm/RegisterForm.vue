<script setup lang="ts">
import { CyrField, CyrPasswordField } from '@shared/ui/Input';
import { CyrForm } from '@shared/ui/Form';
import { CyrButton } from '@shared/ui/Button';
</script>

<template>
  <CyrForm>
    <h3>Sign up</h3>
    <CyrField name="name" label="Name" autocomplete="username" />
    <CyrField name="email" label="Email" autocomplete="email" />
    <CyrPasswordField
      name="password"
      label="Password"
      autocomplete="current-password"
    />
    <template #buttons>
      <CyrButton variant="solid" full>
        Create account
      </CyrButton>
    </template>
    <template #footer>
      <NuxtLink to="/auth/login">
        Already have an account? Login
      </NuxtLink>
    </template>
  </CyrForm>
</template>
