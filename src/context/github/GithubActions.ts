import axios from "axios"

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
});

export const searchUsers = async (text: string) => {
    const params = new URLSearchParams({ q: text })

    const res = await github.get(`/users/search?${params}`)

    return res.data.items;
}

export const getUserAndRepos = async (username: string) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: "10"
    })

    const [user, repos] = await Promise.all([
        github.get(`/users/${username}`), 
        github.get(`/users/${username}/repos?${params}`)
    ])

    return { user: user.data, repos: repos.data }
}