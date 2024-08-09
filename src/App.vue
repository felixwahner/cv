<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useJobStore } from './stores/job'
import { useEducationStore } from './stores/education'

const jobsStore = useJobStore()
const educationStore = useEducationStore()
onMounted(() => {
  jobsStore.fetchJobs()
  educationStore.fetchEducation()
})
</script>

<template>
  <RouterView />
</template>
