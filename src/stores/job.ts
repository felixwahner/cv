import { defineStore } from 'pinia'
import type { EmployersDto, Jobs, JobsDto } from './job.model'
import ky from 'ky'
import { format, formatDistance } from 'date-fns'

interface State {
  jobs: Jobs
  employers: EmployersDto
}

const transformJobsDto = (jobs: JobsDto): Jobs => {
  const transformedJobs: Jobs = {}
  Object.keys(jobs).forEach((jobKey) => {
    const currentJob = jobs[jobKey]
    transformedJobs[jobKey] = {
      ...jobs[jobKey],
      dateStart: format(currentJob.dateStart, 'MM/yyyy'),
      dateEnd: format(currentJob.dateEnd, 'MM/yyyy'),
      dateSpan: formatDistance(currentJob.dateStart, currentJob.dateEnd)
    }
  })
  return transformedJobs
}

export const useJobStore = defineStore('job', {
  state: (): State => {
    return {
      jobs: {},
      employers: {}
    }
  },
  getters: {
    getJobIds(): Array<string> {
      return Object.keys(this.jobs).reverse()
    },
    getJobById(state) {
      return (id?: string) => (id ? state.jobs[id] : void 0)
    },
    getEmployerById(state) {
      return (id?: string) => (id ? state.employers[id] : void 0)
    }
  },
  actions: {
    async fetchJobs(): Promise<void> {
      const [employers, jobs] = await Promise.all([
        ky(`${import.meta.env.BASE_URL}employers.json`).json<EmployersDto>(),
        ky(`${import.meta.env.BASE_URL}jobs.json`).json<JobsDto>()
      ])
      this.jobs = transformJobsDto(jobs)
      this.employers = employers
    }
  }
})
