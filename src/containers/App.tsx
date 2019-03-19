import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'

import UI from '../stores/UI'

interface Prop {
  classes?: any
}
interface State {}

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9696969696969696;
`

const Panel = styled(Paper)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  width: 480px;
`

const styles = {
  menuButton: {
    color: '#FFF',
  },
  formWrapper: { paddingLeft: '1.2rem', paddingRight: '1.2rem' },
  form: { width: '100%' },
}

@withStyles(styles)
@observer
export default class App extends React.Component<Prop, State> {
  render() {
    const { classes } = this.props

    if (!UI.showApp) return null

    return (
      <AppContainer>
        <Panel square>
          <AppBar position="relative">
            <Toolbar>
              <IconButton className={classes.menuButton} aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Chromexy
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container className={classes.formWrapper}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                label="Email Address"
                placeholder="johndoe@gmail.com"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Password"
                placeholder="Enter your password"
                fullWidth
                margin="normal"
                variant="outlined"
                type="password"
                InputLabelProps={{ shrink: true }}
              />
            </form>
          </Grid>
        </Panel>
      </AppContainer>
    )
  }
}
