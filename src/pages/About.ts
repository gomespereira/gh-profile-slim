import { html } from 'htm/preact'

export default function About() {
  return html`
    <div>
      <p>This is a side project created for learning purposes.</p>
      <br/>
      <p>
        If you are interested in knowing more about this project please visit the
        <a
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
