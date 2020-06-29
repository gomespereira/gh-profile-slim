import { html } from 'htm/preact'

export default function Footer() {
  return html`
    <footer class="flex justify-center mr-2 mb-4 ml-2 md:m-4">
      <p>
        Designed and coded by
        <a
          class="text-teal-700 hover:underline"
          href="https://twitter.com/gomespereira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diego Pereira
        </a>
      </p>
    </footer>
  `
}
