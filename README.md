# TripSplit

TripSplit is a web app that allows you to split travel expenses with friends, simplifying the management of expenses, assigning costs to individual members, and calculating how much each person needs to pay or receive.

## Features

- **Login and Authentication**: Each user has their own personal account.
- **Travel Group Management**: Create groups for each trip with your friends.
- **Expense CRUD**: Add, modify, or remove expenses made during the trip.
- **Expense Assignment**: Each expense can be assigned to one or more group members.
- **Quote Calculation**: Automatically calculates how much each member needs to pay or receive.

## Technologies Used

- **Frontend**: Vue 3, Vite, Tailwind CSS
- **Backend**: Python (Django for data management, if applicable)
- **Database**: MySQL (for managing expenses and users)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [npm](https://www.npmjs.com/) (installed with Node.js)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
