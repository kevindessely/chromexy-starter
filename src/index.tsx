import {
  reactRoot,
  jssInsertionPoint,
  styledInsertionPoint,
} from './shadowRoot'
import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import './utils/messageListeners'

import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
import { create as createJss } from 'jss'
import { JssProvider } from 'react-jss'

import { StyleSheetManager } from 'styled-components'

const jss = createJss({
  plugins: [...jssPreset().plugins],
  insertionPoint: jssInsertionPoint,
})
const generateClassName = createGenerateClassName()

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <StyleSheetManager target={styledInsertionPoint}>
      <App />
    </StyleSheetManager>
  </JssProvider>,
  reactRoot
)
