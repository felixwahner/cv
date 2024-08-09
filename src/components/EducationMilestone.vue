<script setup lang="ts">
import { useEducationStore } from '@/stores/education'
const props = defineProps<{
  educationId: string
}>()
const educationStore = useEducationStore()
const education = educationStore.getEducationById(props.educationId)
</script>
<template>
  <article class="card">
    <strong>{{ education?.name }}</strong
    ><br />
    {{ education?.dateStart }} - {{ education?.dateEnd }}
    <h3>{{ education?.type }}</h3>
    <p v-if="education?.diploma"><strong>Diploma:</strong> {{ education?.diploma }}</p>
  </article>
</template>
<style scoped>
h3 {
  font-weight: 600;
}
.description {
  margin-top: 12px;
}
.fakelink {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
strong {
  font-weight: 500;
}
.card {
  background: #ffffff;
  color: #000;
}
</style>
