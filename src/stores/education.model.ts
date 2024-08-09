import type { Modify } from '@/shared/utility/modify'

export interface EducationDto {
  type: string
  name: string
  location: string
  dateStart: number
  dateEnd: number
  diploma: string | null
}
export interface EducationListDto {
  [key: string]: EducationDto
}

export interface Education
  extends Modify<
    EducationDto,
    {
      dateStart: string
      dateEnd: string
    }
  > {}

export interface EducationList {
  [key: string]: Education
}
