import React from 'react'
import { render } from 'react-dom'
import App from './component/app'

const hereGetsRenderedMyAwesomeApp = document.querySelector('#here-gets-rendered-my-awesome-app')

render(
  <App />,
  hereGetsRenderedMyAwesomeApp
)
