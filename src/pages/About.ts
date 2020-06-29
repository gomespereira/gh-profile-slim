import { html } from 'htm/preact'

export default function About() {
  return html`
    <div>
      <p class="text-justify">This is a side project created for learning purposes.</p>
      <br/>
      <p class="text-justify">
        If you are interested in knowing more about this project please visit the
        <a
          class="text-teal-700 hover:underline"
          href="https://github.com/gomespereira/gh-profile-standard"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository.
        </a>
      </p>
    </div>
  `
}
