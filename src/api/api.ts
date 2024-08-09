import type { EmployerDto, Job } from '@/stores/job.model'
import ky from 'ky'

export const getEmployers = (): Promise<Array<EmployerDto>> => {
  return ky('assets/employers.json').json<Array<EmployerDto>>()
}
export const getJobs = (): Promise<Array<Job>> => {
  return ky('assets/employers.json').json<Array<Job>>()
}
