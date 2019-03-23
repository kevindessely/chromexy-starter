import {
  reactRoot,
  jssInsertionPoint,
  styledInsertionPoint,
  shadowRoot,
} from './shadowRoot'
import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import retargetEvents from 'react-shadow-dom-retarget-events'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './containers/App'
import './utils/messageListeners'

import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { create as createJss } from 'jss'
import { JssProvider } from 'react-jss'

import { StyleSheetManager } from 'styled-components'

const jss = createJss({
  plugins: [...jssPreset().plugins],
  insertionPoint: reactRoot,
})
const generateClassName = createGenerateClassName()

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <StyleSheetManager target={styledInsertionPoint}>
      <MuiThemeProvider theme={createMuiTheme()}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </StyleSheetManager>
  </JssProvider>,
  reactRoot
)

retargetEvents(shadowRoot)
