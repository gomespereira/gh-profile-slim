import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'wouter/preact'
import { html } from 'htm/preact'

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
    <section class="flex flex-col items-center space-y-4">
      <picture>
        <img
          class="w-32 rounded-full"
          src=${info.avatar_url}
          alt="Avatar"
        />
      </picture>
      <div class="flex flex-col items-center">
        <span class="font-bold">${info.name}</span>
        <a
          class="text-teal-700 hover:underline"
          href=${info.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @${info.login}
        </a>
      </div>
      <div class="flex flex-col items-center">
        <span>${info.location}</span>
        <span>Joined in ${formattedDate}</span>
      </div>
      <div class="flex space-x-5">
        <div class="flex flex-col items-center">
          <span class="font-bold">${info.public_repos}</span>
          <span>
            ${
              info.public_repos === 1
                ? "Repository"
                : "Repositories"
            }
          </span>
        </div>
        <div class="flex flex-col items-center">
          <span class="font-bold">${info.followers}</span>
          <span>
            ${
              info.followers === 1
                ? "Follower"
                : "Followers"
            }
          </span>
        </div>
        <div class="flex flex-col items-center">
          <span class="font-bold">${info.following}</span>
          <span>Following</span>
        </div>
      </div>
    </section>
  `
}
