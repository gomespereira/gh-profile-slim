import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'wouter/preact'
import { html } from 'htm/preact'

export default function Info() {
  const [info, setInfo] = useState<any>({})
  const router = useRouter()
  const username = router.state

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
    <section>
      <picture>
        <img
          src=${info.avatar_url}
          alt="Avatar"
        />
      </picture>
      <div>
        <span>${info.name}</span>
        <a
          href=${info.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          @${info.login}
        </a>
      </div>
      <div>
        <span>${info.location}</span>
        <span>Joined in ${info.created_at}</span>
      </div>
      <div>
        <div>
          <span>${info.public_repos}</span>
          <span>
            ${
              info.public_repos === 1
                ? "Repository"
                : "Repositories"
            }
          </span>
        </div>
        <div>
          <span>${info.followers}</span>
          <span>
            ${
              info.followers === 1
                ? "Follower"
                : "Followers"
            }
          </span>
        </div>
        <div>
          <span>${info.following}</span>
          <span>Following</span>
        </div>
      </div>
    </section>
  `
}
