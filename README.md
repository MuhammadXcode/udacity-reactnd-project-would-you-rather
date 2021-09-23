# Would you rather project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this project is to build a React app and use Redux as a state management

## TL;DR

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Structure

```bash
├── package.json
├── public
|  ├── favicon.ico
|  ├── index.html
|  ├── logo192.png
|  ├── logo512.png
|  ├── manifest.json
|  └── robots.txt
├── README.md
├── src
|  ├── actions
|  |  ├── authedUser.js
|  |  ├── questions.js
|  |  ├── shared.js
|  |  └── users.js
|  ├── components
|  |  ├── Date.js
|  |  ├── Error.js
|  |  ├── Leaderboard.js
|  |  ├── LeaderboardItem.js
|  |  ├── Login.js
|  |  ├── NavBar.js
|  |  ├── NavBarLinks.js
|  |  ├── QData.js
|  |  ├── QItem.js
|  |  ├── QNew.js
|  |  ├── QResult.js
|  |  ├── Questions.js
|  |  ├── QVote.js
|  |  ├── Routes.js
|  |  └── User.js
|  ├── middleware
|  |  ├── index.js
|  |  └── logger.js
|  ├── reducers
|  |  ├── authedUser.js
|  |  ├── index.js
|  |  ├── questions.js
|  |  └── users.js
|  ├── utils
|  |  ├── _DATA.js
|  |  ├── api.js
|  |  └── helpers.js
|  ├── App.js
|  └── index.js
└── yarn.lock

## How to use 

This application is a recreation of the Would you rather game. The user is able to answer polls created by other users, as well as creating their own polls. There's also a leaderboard of users.