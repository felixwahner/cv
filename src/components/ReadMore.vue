<script setup lang="ts">
import { ChevronRight, ChevronUp } from 'lucide-vue-next';
defineProps<{
  open: boolean | undefined
}>()
</script>
<template>
  <hr class="divider" />
  <a class="fakelink" v-if="open">
      <ChevronUp class="icon" color="currentColor" :size="16" :stroke-width="2" />
      Less details
  </a>
  <a class="fakelink" v-if="!open">
    <ChevronRight class="icon" color="currentColor" :size="16" :stroke-width="2" />
     More details
  </a>
</template>
<style scoped>
.icon {
  position: relative;
  top: 3px;
}
.divider {
  margin: 16px 0 8px 0;
  border: none;
  height: 1px;
  line-height: 1px;
  background-color: #ccc;
}
.fakelink {
  text-transform: uppercase;
  display: inline-block;
  border-top: 1px solid rgb(246 246 246);
  margin-top: 10px;
  text-decoration: none;
  background-color: var(--purple-brand);
  color: #fff;
  transition: 0.4s;
  padding: 3px 8px 3px 4px;
  border-radius: 6px;;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
