import type { Modify } from '@/shared/utility/modify'

export interface JobDto {
  id: number
  employerId: string
  title: string
  dateStart: Date
  dateEnd: Date
  shortDescription: string
  description: string
  skills: string[]
  software: string[]
}
export interface JobsDto {
  [key: string]: JobDto
}

export interface Job
  extends Modify<
    JobDto,
    {
      dateStart: string
      dateEnd: string
    }
  > {
  dateSpan: string
}
export interface Jobs {
  [key: string]: Job
}

export interface EmployerDto {
  id: number
  name: string
}
export interface EmployersDto {
  [key: string]: EmployerDto
}
