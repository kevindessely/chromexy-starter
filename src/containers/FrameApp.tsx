import get from 'lodash/get'
import React from 'react'
import rtl from 'jss-rtl'
import Frame from 'react-frame-component'
import { autobind } from 'core-decorators'
import NoSsr from '@material-ui/core/NoSsr'
import { create, JSS, JSSPlugin } from 'jss'
import { StylesProvider } from '@material-ui/styles'
import { withStyles, jssPreset, createMuiTheme } from '@material-ui/core/styles'
import { observer } from 'mobx-react'
import UI from '../stores/UI'
import { ThemeProvider, makeStyles } from '@material-ui/styles'
import classnames from 'classnames'
import camelCase from 'lodash/camelCase'

const theme = createMuiTheme({})

const styles = (theme: any) => ({
  root: {
    width: 0,
    height: 0,
    border: 'none',
  },
  rootLeft: {
    left: 0,
  },
  rootRight: {
    right: 0,
  },
  rootActive: {
    position: 'fixed',
    top: 0,
    width: '480px',
    height: '100%',
    zIndex: 2147483647,
    backgroundColor: theme.palette.background.default,
    border: 'none',
    boxShadow: theme.shadows[1],
  },
})

interface Props {
  classes: any
  children: any
  theme: any
}

interface State {
  ready: boolean
  jss?: JSS
  sheetsManager?: Map<any, any>
  container?: any
}

@observer
class FrameApp extends React.Component<Props, State> {
  frameDocument: any
  frameWindow: any

  state = {
    ready: false,
  } as State

  cssBaseLine: any = {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        margin: 0,
        // Remove the margin in all browsers.
        backgroundColor: this.props.theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: this.props.theme.palette.common.white,
        },
      },
    },
  }

  @autobind
  handleFrameRef(ref: any) {
    this.frameDocument = ref ? ref.node.contentDocument : null
    this.frameWindow = ref ? ref.node.contentWindow : null
  }

  @autobind
  onFrameDidMount() {
    const jss = create({
      plugins: [...jssPreset().plugins, rtl()] as ReadonlyArray<JSSPlugin>,
      insertionPoint: this.frameWindow['jss'],
    })

    jss.createStyleSheet(this.cssBaseLine).attach()
    this.setState({
      ready: true,
      jss: jss,
      sheetsManager: new Map(),
      container: this.frameDocument.body,
    })
  }

  @autobind
  onFrameDidUpdate() {
    this.frameDocument.body.dir = this.props.theme.direction
  }

  render() {
    const { classes, children } = this.props

    const rootClassNames = classnames(
      get(classes, `root${UI.showApp ? 'Active' : ''}`),
      get(classes, camelCase(['root', UI.appLocation].join('-')))
    )

    return (
      <NoSsr>
        <Frame
          ref={this.handleFrameRef}
          className={rootClassNames}
          contentDidMount={this.onFrameDidMount}
          contentDidUpdate={this.onFrameDidUpdate}
        >
          <div id="jss" />
          {this.state.ready ? (
            <StylesProvider
              jss={this.state.jss}
              sheetsManager={this.state.sheetsManager}
            >
              <ThemeProvider theme={theme}>
                {React.cloneElement(children, {
                  container: this.state.container,
                })}
              </ThemeProvider>
            </StylesProvider>
          ) : null}
        </Frame>
      </NoSsr>
    )
  }
}

export default withStyles(styles, { withTheme: true })(FrameApp)
