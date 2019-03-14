import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

import App from './containers/App'
import './utils/messageListeners'

const chromexy = document.createElement('div')
chromexy.setAttribute('id', 'chromext-app')
document.querySelector('body').appendChild(chromexy)

ReactDOM.render(<App />, document.querySelector('div#chromext-app'))
