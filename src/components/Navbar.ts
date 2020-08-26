import { html } from 'htm/preact'
import { useLocation, Link } from 'wouter-preact'

export default function Navbar() {
  const [location, ] = useLocation()

  return html`
    <nav class="mt-4 mr-2 ml-2 md:mt-8 md:mr-10 md:ml-10">
      <ul class="flex justify-end">
        <li class="text-blue-900 font-bold hover:underline">
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
