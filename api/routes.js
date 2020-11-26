const express = require('express');
const router = express.Router();

const axios = require('axios');
const api = axios.create({
    baseURL: "https://api.github.com",
});


// Filter repository data
// Return only specific fields from data of a repository
function filterRepoData(originalData) {
    const {
        id, name, full_name, html_url, 
        description, created_at, language, 
        size, open_issues_count, license
    } = originalData;
    return {
        id, name, full_name, html_url, 
        description, created_at, language, 
        size, open_issues_count, license
    };
}

// router.get('/', (req, res) => {
//     return res.send("Hello, World");
// });

// GET - /api/users?since={number}
// This endpoint must return a list of GitHub users and the link for the next page.
router.get('/users', (req, res) => {
    const since = req.query.since | 0;
    api.get(`users?since=${since}`)
        .then(response => res.json(response.data).status(200))
        .catch(err => {
            console.log('Error on access Github API: '+ err);
            return res.json({message: 'Error on access Github API'}).status(404);
        });
});

// GET - /api/users/:username/details
// This endpoint must return the details of a GitHub user
router.get('/users/:username/details', (req, res) => {
    const username = req.params.username;
    // Axios request
    api.get(`users/${username}`)
        .then(response => {
            const { 
                id, login, name, html_url, avatar_url, 
                bio, twitter_username, created_at 
            } = response.data;
            return res.json({ id, login, name, url: html_url, 
                avatar_url, bio, twitter_username, created_at }).status(200);
        })
        .catch(err => {
            const errorMessage = 'Error on access this user on Github API';
            console.log(errorMessage);
            return res.json({message: errorMessage}).status(404);
        });
});

// GET - /api/users/:username/repos
// This endpoint must return a list with all user repositories
router.get('/users/:username/repos', (req, res) => {
    const username = req.params.username;
    // Axios Request
    api.get(`users/${username}/repos`)
        .then(response => {
            const data = response.data.map(repo => filterRepoData(repo));
            return res.json(data).status(200);
        })
        .catch(err => {
            const errorMessage = 'Error on access this user on Github API';
            console.log(errorMessage);
            return res.json({message: errorMessage}).status(404);
        });
});

module.exports = router;