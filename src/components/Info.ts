import { html } from 'htm/preact'
import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'wouter-preact'

import { formatter } from '../utils/utils'

export default function Info() {
  const [info, setInfo] = useState<any>({})
  const router = useRouter()
  const username = router.state
  const formattedDate = formatter(info.created_at)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': import.meta.env.SNOWPACK_PUBLIC_GITHUB_TOKEN
      }
    })
      .then(response => response.json())
      .then(data => setInfo(data))
  }, [])

  return html`
    <section className="flex flex-col items-center space-y-4">
      <picture>
        <img
          className="w-32 rounded-full"
          src=${info.avatar_url}
          alt="Avatar"
        />
      </picture>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">${info.name}</span>
        <a
          className="text-blue-900 font-bold hover:underline"
          href=${info.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @${info.login}
        </a>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center space-x-1">
          <svg
            className="w-4"
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd"
              d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
          <p>Lives in
            <span className="font-bold">${info.location}</span>
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            className="w-4"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.75 0a.75.75 0 01.75.75V2h5V.75a.75.75 0 011.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0113.25 16H2.75A1.75 1.75 0 011 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 014.75 0zm0 3.5h8.5a.25.25 0 01.25.25V6h-11V3.75a.25.25 0 01.25-.25h2zm-2.25 4v6.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V7.5h-11z"
            />
          </svg>
          <p>Joined in
            <span className="font-bold">${formattedDate}</span>
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            className="w-5"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
            />
          </svg>
          <p>Followed by
            <a
              className="font-bold hover:text-blue-900"
              href=${html`https://github.com/${info.login}?tab=followers`}
              target="__blank"
              rel="noopener noreferrer"
            >
              ${
                info.followers >= 1000
                  ? html`${(info.followers / 1000).toFixed(1)}k`
                  : info.followers
              }
            </a>
            , follows
            <a
              className="font-bold hover:text-blue-900"
              href=${html`https://github.com/${info.login}?tab=following`}
              target="__blank"
              rel="noopener noreferrer"
            >
              ${info.following}
            </a>
          </p>
        </div>
      </div>
    </section>
  `
}
