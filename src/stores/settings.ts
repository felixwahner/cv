import { defineStore } from 'pinia'

interface State {
  openDetails: Array<string>
}

export const useSettingsStore = defineStore('settings', {
  state: (): State => {
    return {
      openDetails: []
    }
  },
  actions: {
    toggleOpenState(id: string) {
      const isOpen = this.openDetails.filter((openId) => id !== openId)
      if (isOpen.length <= this.openDetails.length) {
        this.openDetails = [...isOpen]
      } else {
        this.openDetails = [...this.openDetails, id]
      }
    }
  },
  getters: {
    getOpenDetailsById(state) {
      return (id?: string) =>
        id ? state.openDetails.some((openDetailId) => openDetailId === id) : void 0
    }
  }
})
