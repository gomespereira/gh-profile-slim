import { html } from 'htm/preact'
import { Switch, Route } from 'wouter/preact'

import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'

export default function Content() {
  return html`
    <main class="flex flex-col flex-auto justify-center items-center m-4">
      <${Switch}>
        <${Route}
          path="/profile"
          component=${Profile}
        />
        <${Route}
          path="/about"
          component=${About}
        />
        <${Route}
          path="/"
          component=${Home}
        />
      <//>
    </main>
  `
}
