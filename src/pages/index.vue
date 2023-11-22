<script lang="ts" setup>
import { CloudIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <CyrButton>Test</CyrButton>
  <CyrButton disabled>Test</CyrButton>
  <CyrButton full>Test</CyrButton>
  <CyrButton full disabled>Test</CyrButton>
  <CyrButton variant="outline">Test</CyrButton>
  <CyrButton variant="outline" disabled>Test</CyrButton>
  <CyrButton variant="outline" full>Test</CyrButton>
  <CyrButton variant="outline" full disabled>Test</CyrButton>
  <CyrButton icon>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <CyrButton icon disabled>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <CyrButton variant="outline" icon>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <CyrButton variant="outline" icon disabled>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <CyrButton variant="transparent" icon>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <CyrButton variant="transparent" icon disabled>
    <CloudIcon style="width: 2.5rem" />
  </CyrButton>
  <div style="height: 3000px">Main page</div>
</template>
