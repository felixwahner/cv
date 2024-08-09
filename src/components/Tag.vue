<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>
<template>
  <span class="tag">{{ title }}</span>
</template>
<style scoped>
.tag {
  background-color: rgba(131, 131, 131, 0.07);
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
  font-size: 0.7rem;
}
</style>
