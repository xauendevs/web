const GITHUB_API_ENDPOINT =
  'https://api.github.com/repos/xauendevs/web/contributors?per_page=100'

function mapFromApiResponseToContributors(apiResponse) {
  return apiResponse.map(({ login, avatar_url: avatar, html_url: url }) => {
    return { login, avatar, url }
  })
}

export default async function getGitHubContributors() {
  const apiResponse = await fetch(GITHUB_API_ENDPOINT)
    .then((res) => (res.ok ? res.json() : []))
    .catch(() => [])

  return mapFromApiResponseToContributors(apiResponse)
}
