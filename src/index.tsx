import React from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'

import 'typeface-roboto'

const chromexy = document.createElement('div')
chromexy.setAttribute('id', 'chromext-app')
document.querySelector('body').appendChild(chromexy)

ReactDOM.render(
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>,
  document.querySelector('div#chromext-app')
)
