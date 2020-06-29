import { h } from 'preact'
import { useLocation, Link } from 'wouter/preact'

export default function Navbar() {
  const [location] = useLocation()

  return (
    <nav>
      <ul>
        <li>
          {
            location === '/'
              ? <Link to="/about">About</Link>
              : location === '/profile'
                ? <Link to="/">New Search</Link>
              : <Link to="/">Home</Link>
          }
        </li>
      </ul>
    </nav>
  )
}
