import { types } from 'mobx-state-tree'

const UI = types
  .model('UI', {
    showApp: types.optional(types.boolean, false),
  })
  .actions(self => {
    return {
      toggleApp() {
        self.showApp = !self.showApp
      },
    }
  })
  .create({ showApp: false })

export default UI
