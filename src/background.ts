console.log('chrome', chrome)

chrome.browserAction.onClicked.addListener(function(tab: any) {
  chrome.tabs.sendMessage(tab.id, { action: 'toggleApp' })
})
