import { html } from 'htm/preact'

import Info from '../components/Info'
import Repos from '../components/Repos'

export default function Profile() {
  return html`
    <div>
      <${Info} />
      <${Repos} />
    </div>
  `
}
