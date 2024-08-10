import { defineStore } from 'pinia'
import type { EmployersDto, Job, JobDto, Jobs, JobsDto } from './job.model'
import ky from 'ky'
import { format, formatDistance, parse } from 'date-fns'

interface State {
  jobs: JobsDto
  employers: EmployersDto
}

const transformJobDto = (job: JobDto): Job => {
  return {
    ...job,
    dateStart: format(job.dateStart, 'MM/yyyy'),
    dateEnd: format(job.dateEnd, 'MM/yyyy'),
    dateSpan: formatDistance(job.dateStart, job.dateEnd)
  }
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
      return (id?: string): Job => (id ? transformJobDto(state.jobs[id]) : void 0)
    },
    getEmployerById(state) {
      return (id?: string) => (id ? state.employers[id] : void 0)
    },
    getWorkExperienceDuration(): string | null {
      const sortedDates: Array<string> = Object.values(this.jobs)
        .reduce((acc: Array<string>, job: Job): Array<string> => {
          console.log([...acc, job.dateStart, job.dateEnd])
          return [...acc, job.dateStart, job.dateEnd]
        }, [])
        .sort()
      return sortedDates.length
        ? formatDistance(sortedDates[0], sortedDates[sortedDates.length - 1])
        : null
    }
  },
  actions: {
    async fetchJobs(): Promise<void> {
      const [employers, jobs] = await Promise.all([
        ky(`${import.meta.env.BASE_URL}employers.json`).json<EmployersDto>(),
        ky(`${import.meta.env.BASE_URL}jobs.json`).json<JobsDto>()
      ])
      this.jobs = jobs
      this.employers = employers
    }
  }
})
