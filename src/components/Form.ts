import { html } from 'htm/preact'
import { useState } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

export default function Form() {
  const [username, setUsername] = useState('')
  const [, setLocation] = useLocation()

  function handleChange(event: any) {
    setUsername(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
    setLocation(`/profile/${username}`)
  }

  return html`
    <form onSubmit=${handleSubmit}>
      <label htmlFor="username">github.com/</label>
      <input
        id="username"
        class="ml-1 pl-2 rounded outline-none focus:shadow-outline"
        type="text"
        placeholder=${'Press "/" to focus'}
        onChange=${handleChange}
      />
    </form>
  `
}
