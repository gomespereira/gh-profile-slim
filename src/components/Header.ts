import { html } from 'htm/preact'

import Navbar from './Navbar'

export default function Header() {
  return html`
    <${Navbar} />
  `
}
