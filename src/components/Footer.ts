import { html } from 'htm/preact'

export default function Footer() {
  return html`
    <footer className="flex justify-center mr-2 mb-4 ml-2 md:mr-10 md:mb-8 md:ml-10">
      <p>
        Designed and coded by
        <a
          className="text-blue-900 font-bold hover:underline"
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
