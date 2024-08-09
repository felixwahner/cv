import { defineStore } from 'pinia'
import ky from 'ky'
import { format } from 'date-fns'
import type { EducationList, EducationListDto } from './education.model'

interface State {
  education: EducationList
}

const transformEducationDto = (education: EducationListDto): EducationList => {
  const transformedEducation: EducationList = {}
  Object.keys(education).forEach((educationKey) => {
    const currentEducation = education[educationKey]
    transformedEducation[educationKey] = {
      ...education[educationKey],
      dateStart: format(currentEducation.dateStart, 'MM/yyyy'),
      dateEnd: format(currentEducation.dateEnd, 'MM/yyyy')
    }
  })
  return transformedEducation
}

export const useEducationStore = defineStore('education', {
  state: (): State => {
    return {
      education: {}
    }
  },
  getters: {
    getEducationIds(): Array<string> {
      return Object.keys(this.education).reverse()
    },
    getEducationById(state) {
      return (id?: string) => (id ? state.education[id] : void 0)
    }
  },
  actions: {
    async fetchEducation(): Promise<void> {
      const education = await ky(
        `${import.meta.env.BASE_URL}/education.json`
      ).json<EducationListDto>()
      this.education = transformEducationDto(education)
    }
  }
})
