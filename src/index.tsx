import './install'
import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import FrameApp from './containers/FrameApp'

const chromexy = document.createElement('div')
chromexy.setAttribute('id', 'chromexy-app')
chromexy.style.width = '0'
chromexy.style.height = '0'
chromexy.style.zIndex = '2147659323'
document.querySelector('body').appendChild(chromexy)

ReactDOM.render(
  <div>
    <FrameApp>
      <App />
    </FrameApp>
  </div>,
  chromexy
)
