import { html } from 'htm/preact'
import { useRef, useState, useEffect } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

export default function Form() {
  const inputElement = useRef<HTMLInputElement>(null)
  const [username, setUsername] = useState('')
  const [, setLocation] = useLocation()

  useEffect(() => {
    document.onkeyup = handleKeyUp
  })

  function handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Slash') inputElement.current.focus()
    if (event.code === 'Escape') inputElement.current.blur()
  }

  function handleChange(event: any): void {
    setUsername(event.target.value)
  }

  function handleSubmit(event: any): void {
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
        ref=${inputElement}
        onChange=${handleChange}
      />
    </form>
  `
}
