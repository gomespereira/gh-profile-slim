import { html } from 'htm/preact'
import { Switch, Route } from 'wouter-preact'

import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'

export default function Content() {
  return html`
    <main class="flex flex-col flex-auto justify-center items-center mt-4 mr-4 mb-10 ml-4 md:mr-10 md:ml-10 space-y-10">
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
