const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

const APIURL = 'https://api.github.com/users/';

// Make sure axios is imported
// import axios from 'axios';  // If using ES modules
// const axios = require('axios');  // If using CommonJS

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        createUserCard(data)
        getRepos(username)
    } catch (err) {
        if (err.response.status == 404) {
            message = {
                title: 'User not found.',
                caption: `Either the profile does not exist or you've mispelt something in the search. 
                Verify your spelling and try again...`
            }
            createErrorCard(message)
        } else {
            message = {
                title: 'Unable to retrive data.',
                caption: `Somehting is preventing a connection between to the API. 
                Please try again in a moment... `
            }
            createErrorCard(message)
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos')
        addReposToCard(data)
    } catch(err) {
        message = 'There has been an issue fetching the error data.'
        addErrorToCard()
    }
}

function addReposToCard (repos) {
    const reposEl = document.getElementById('repos')
    repos.forEach(repo => {
        const repoLink =  document.createElement('a')
        repoLink.classList.add('text-sm', 'bg-cyan-500', 'text-cyan-950', 'p-1.5', 'rounded')
        repoLink.href = repo.html_url
        repoLink.target = '_blank' 
        repoLink.innerText = repo.name
        reposEl.appendChild(repoLink)
    });
}

function addErrorToCard() {
    const reposEl = document.getElementById('repos')
    reposEl.innerHTML = `
    <div class="user-info flex-1">
        <h4>Unable to Retrieve Repo Data 👀</h4>
    </div>
    `
}

function createErrorCard(message) {
    const cardHTML =`
    <div class="bg-black/50 m-w-full max-w max-w-2xl rounded-md p-4 flex">
       <div class="user-info flex-1 ml-4">
           <h4>${message.title} 👀</h4>
            <p id="bio" class="text-wrap">
                ${message.caption}
            </p>
       </div>
   </div>
   `
   main.innerHTML = cardHTML
}

function createUserCard(user) {
    const avatar = user.avatar_url
    const username = user.name
    const bio = user.bio
    const followers = user.followers
    const following = user.following
    const repos = user.public_repos

    const cardHTML =`
    <div class="bg-black/50 m-3 w-full max-w max-w-2xl rounded-md p-4 flex">
        <div class="profile" >
            <img src="${avatar}" alt="${username}" 
            class="rounded-full w-36 h-36 bg-center bg-cover border-4 border-cyan-400">
        </div>
        <div class="user-info flex-1 ml-4">
            <h4>${username}</h4>
            <p id="bio" class="text-wrap">
                ${bio}
            </p>
            <ul class="flex justify-between gap-4 max-w-md mt-4">
                <li><strong class="text-cyan-300">${followers}</strong> Followers</li>
                <li><strong class="text-cyan-300">${following}</strong> Following</li>
                <li><strong class="text-cyan-300">${repos}</strong> Reops</li>
            </ul>
            <div id="repos" class="mt-4 flex flex-wrap gap-1">
            </div>
        </div>
    </div>
    `

    main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value

    if (user) {
        getUser(user)
        search.value = ''
    }
})

