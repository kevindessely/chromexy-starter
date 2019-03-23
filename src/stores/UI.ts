import { types } from 'mobx-state-tree'

const UI = types
  .model('UI', {
    showApp: types.optional(types.boolean, false),
    appLocation: types.maybe(
      types.enumeration('AppLocation', ['left', 'right'])
    ),
  })
  .actions(self => {
    return {
      afterCreate() {
        self.appLocation = 'left'
      },
      toggleApp() {
        self.showApp = !self.showApp
      },
      toggleAppLocation() {
        if (self.appLocation === 'right') self.appLocation = 'left'
        else self.appLocation = 'right'
      },
    }
  })
  .create({ showApp: false })

export default UI
