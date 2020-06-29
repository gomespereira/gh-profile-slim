import { html } from 'htm/preact'
import { useLocation, Link } from 'wouter/preact'

export default function Navbar() {
  const [location] = useLocation()

  return html`
    <nav class="mt-4 mr-2 ml-2">
      <ul class="flex justify-end space-x-6">
        <li class="text-teal-700 hover:underline">
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
