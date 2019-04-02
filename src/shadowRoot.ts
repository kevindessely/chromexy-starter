export const chromexy = document.createElement('div')
chromexy.setAttribute('id', 'chromexy-app')
document.querySelector('body').appendChild(chromexy)

// chromexy.attachShadow({ mode: 'closed' })
export const shadowRoot = chromexy.attachShadow({ mode: 'closed' })

export const jssInsertionPoint = document.createElement('noscript')
jssInsertionPoint.setAttribute('id', 'jss-insertion-point')
shadowRoot.appendChild(jssInsertionPoint)

export const styledInsertionPoint = document.createElement('noscript')
styledInsertionPoint.setAttribute('id', 'styled-insertion-point')
shadowRoot.appendChild(styledInsertionPoint)

export const reactRoot = document.createElement('div')
reactRoot.setAttribute('id', 'react-app')
shadowRoot.appendChild(reactRoot)
