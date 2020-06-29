import { render } from 'preact'
import { html } from 'htm/preact'
import 'preact/devtools'

import './index.css'

import App from './App'

render(html`
  <${App} />`,
  document.getElementById('root')
)
