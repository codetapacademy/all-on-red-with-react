import React from 'react'
import { render } from 'react-dom'
import App from './component/app'

const hereRendersMyApp = document.querySelector('#react-app')
render(
  <App/>,
  hereRendersMyApp
)