import { html } from 'htm/preact'
import { useLocation, Link } from 'wouter/preact'

export default function Navbar() {
  const [location] = useLocation()

  return html`
    <nav>
      <ul>
        <li>
          ${
            location === '/'
              ? html`<${Link} href="/about">About<//>`
              : location === '/profile'
                ? html`<${Link} href="/">New Search<//>`
                : html`<${Link} href="/">Home<//>`
          }
        </li>
      </ul>
    </nav>
  `
}
