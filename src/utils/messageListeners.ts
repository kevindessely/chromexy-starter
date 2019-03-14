import UI from '../stores/UI'

interface Message {
  action: string
}

chrome.runtime.onMessage.addListener(({ action }: Message) => {
  switch (action) {
    case 'toggleApp': {
      UI.toggleApp()
      break
    }
    default:
  }
})
