<script setup lang="ts">
import { useJobStore } from '@/stores/job'
import type { EmployerDto } from '@/stores/job.model'
import TagList from './TagList.vue'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import ReadMore from './ReadMore.vue'
const props = defineProps<{
  jobId: string
}>()
const jobStore = useJobStore()
const job = jobStore.getJobById(props.jobId)
const employer: EmployerDto | undefined = jobStore.getEmployerById(job?.employerId)

const settingsStore = useSettingsStore()
const { getOpenDetailsById } = storeToRefs(settingsStore)
</script>
<template>
  <article class="card">
    <div class="subtitle">
      <strong class="employer"><a target="_blank" title="Opens in a new window" v-bind:href="employer?.url">{{ employer?.name }}</a></strong>
      ({{ job?.dateSpan }}: {{ job?.dateStart }} - {{ job?.dateEnd }})
    </div>
    <h3>{{ job?.title }}</h3>
    <details v-bind:open="getOpenDetailsById(jobId)" @click="settingsStore.toggleOpenState(jobId)">
      <summary>
        {{ job?.shortDescription }}
        <ReadMore v-bind:open="getOpenDetailsById(jobId)"></ReadMore>
      </summary>
      <div class="description">
        {{ job?.description }}
      </div>
    </details>
    <TagList :tags="job?.skills" :title="'Skills'" />
    <TagList :tags="job?.software" :title="'Software'" />
  </article>
</template>
<style scoped>
summary {
  list-style-type: '» ';
  &::marker {
    color: var(--purple-brand);
    font-size: 1.2em;
  }
  &:hover {
    border-radius: 6px;
  }
}
h3 {
  font-weight: 600;
}
.employer {
  font-family: Poly, serif;
}
details {
  font-size: 1rem;
  margin-bottom: 12px;
  cursor: pointer;
}
.description {
  margin-top: 12px;
  margin-bottom: 24px;
}
.subtitle {
  position:relative;
  top: -4px;
}
@media (min-width: 1080px)  {
  .subtitle {
    position: static;
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
