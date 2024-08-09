<script setup lang="ts">
defineProps<{
  open: boolean | undefined
}>()
</script>
<template>
  <a class="fakelink">+ MORE</a>
</template>
<style scoped>
.fakelink {
  display: block;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  padding-top: 5px;
  text-decoration: none;
  color: var(--purple-brand);
  transition: 0.4s;
  padding: 3px;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
