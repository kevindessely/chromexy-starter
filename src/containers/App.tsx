import React from 'react'
import { observer } from 'mobx-react'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles, Link, Theme, createStyles } from '@material-ui/core'
import { autobind } from 'core-decorators'
import classnames from 'classnames'
import get from 'lodash/get'
import camelCase from 'lodash/camelCase'

import UI from '../stores/UI'

interface Prop {
  classes?: any
}
interface State {}

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      zIndex: 9696969696969696,
      flexGrow: 1,
    },
    panel: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      width: '480px',
    },
    panelRight: {
      right: 0,
    },
    panelLeft: {
      left: 0,
    },
    toolbarRight: {
      flexDirection: 'row-reverse',
    },
    grow: {
      flexGrow: 1,
    },
    messageContainer: {
      margin: spacing.unit * 3,
    },
    formContainer: {
      margin: spacing.unit * 3,
    },
  })

@withStyles(styles)
@observer
export default class App extends React.Component<Prop, State> {
  @autobind
  handleToggleLocation() {
    UI.toggleAppLocation()
  }

  render() {
    const { classes } = this.props

    if (!UI.showApp) return null

    const panelClasses = classnames(
      classes.panel,
      get(classes, camelCase(['panel', UI.appLocation].join('-')))
    )

    const isRightToolbar = UI.appLocation === 'right'
    const toolbarClasses = isRightToolbar ? classes.toolbarRight : null

    return (
      <div className={classes.root}>
        <Paper square className={panelClasses}>
          <AppBar position="relative">
            <Toolbar className={toolbarClasses}>
              <div className={isRightToolbar ? null : classes.grow}>
                {/* <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                color="inherit"
              >
                <MenuIcon />
              </IconButton> */}
                <Typography variant="h6" color="inherit">
                  Chromexy
                </Typography>
              </div>
              <div className={isRightToolbar ? classes.grow : null}>
                <IconButton onClick={this.handleToggleLocation} color="inherit">
                  {UI.appLocation === 'left' && <KeyboardArrowRightRounded />}
                  {UI.appLocation === 'right' && <KeyboardArrowLeftRounded />}
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Grid>
            <Grid item xs={12} className={classes.messageContainer}>
              <Typography component="h3" variant="headline" gutterBottom>
                Login
              </Typography>
              <Typography variant="body1" gutterBottom>
                Don't have an account?&nbsp;
                <Link href="https://google.com/">Create your account</Link>
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.formContainer}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  label="Email Address"
                  placeholder="johndoe@gmail.com"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  autoFocus
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
                <Grid
                  item
                  container
                  alignItems="center"
                  justify="space-between"
                >
                  <FormControlLabel
                    control={<Checkbox value="remember-me" />}
                    label="Remember Me"
                  />
                  <Link href="https://google.com/">Forgot Password?</Link>
                </Grid>
                <Grid item container justify="flex-end">
                  <Button size="large" variant="contained" color="secondary">
                    LOGIN
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}
