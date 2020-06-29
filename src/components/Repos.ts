import { useState, useEffect } from 'preact/hooks'
import { useRouter } from 'wouter/preact'
import { html } from 'htm/preact'

export default function Repos() {
  const [repos, setRepos] = useState<any>([])
  const router = useRouter()
  const username = router.state

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': import.meta.env.SNOWPACK_PUBLIC_GITHUB_TOKEN
      }
    })
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  return html`
    <section>
      <div>Repositories</div>
      <div>
        ${repos.map((repo: any) => html`
          <div key=${repo.id}>
            <div>
              <a
                href=${repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
              </a>
            </div>
            <div>
              <span>${repo.name}</span>
            </div>
            ${
              repo.description === null
                ? html`<span>None</span>`
                : html`<span>${repo.description}</span>`
            }
            <div>
              ${
                repo.language === null
                  ? html`<span className="italic">None</span>`
                  : html`<span className="italic">${repo.language}</span>`
              }
              <div>
                <div>
                  <span>${repo.stargazers_count}</span>
                </div>
                <div>
                  <span>${repo.forks_count}</span>
                </div>
              </div>
            </div>
          </div>
        `)}
      </div>
    </section>
  `
}
