<script setup lang="ts">
import { useJobStore } from '@/stores/job'
import JobMilestone from './JobMilestone.vue'
import Timeline from './Timeline.vue'
import WorkExperienceCounter from './WorkExperienceCounter.vue'
import EducationMilestone from './EducationMilestone.vue'
import { useEducationStore } from '@/stores/education'
import { storeToRefs } from 'pinia';
const jobStore = useJobStore()
const educationStore = useEducationStore()
const { getWorkExperienceDuration, getJobIds }  = storeToRefs(jobStore);
</script>
<template>
  <h2>Curriculum Vitae</h2>
  <Timeline>
    <WorkExperienceCounter :duration="getWorkExperienceDuration" :jobAmount="getJobIds.length"></WorkExperienceCounter>
    <JobMilestone v-for="id in jobStore.getJobIds" :jobId="id" :key="id" />
  </Timeline>
  <h2>Education</h2>
  <Timeline>
    <EducationMilestone v-for="id in educationStore.getEducationIds" :educationId="id" :key="id"
  /></Timeline>
</template>
<style scoped>
h2 {
  margin-top: 24px;
  color: var(--purple-brand);
  padding-left: 18px;
  text-transform: uppercase;
}
@media (min-width: 1080px)  {
  h2 {
    padding-left: 0;
  }
}
</style>
