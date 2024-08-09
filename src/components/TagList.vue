<script setup lang="ts">
import Tag from './Tag.vue'

const props = defineProps<{
  title?: string
  tags?: Array<string>
}>()
</script>
<template>
  <div class="container">
    <strong v-if="title">{{ title }}</strong>
    <ul v-if="tags" class="taglist">
      <li class="taglist-entry" v-for="tag in tags" :key="tag"><Tag :title="tag"></Tag></li>
    </ul>
  </div>
</template>
<style scoped>
@media (min-width: 1080px)  {
  .container {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
}
strong {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  width: 15%;
  text-transform: uppercase;
  margin-top: 12px;
}
@media (min-width: 1080px)  {
  strong {
    display: inline-block;
  }
}
.taglist {
  list-style: none;
  display: inline;
  margin: 0;
  padding: 0;
}
.taglist-entry {
  display: inline;
  padding: 0 5px 0 0;
}
</style>
