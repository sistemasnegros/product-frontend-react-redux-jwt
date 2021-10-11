# product-frontend-react-redux-jwt

<p align="center">
  <a href="" rel="noopener">
  <img width=600px  src="https://miro.medium.com/max/600/0*1p4U99DAhsOHqX-m.jpg" alt="Project logo"></a>
 </a>
</p>

<h3 align="center"> Back-End Full-Stack Development Test</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/sistemasnegros/product-frontend-react-redux-jwt/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/sistemasnegros/product-frontend-react-redux-jwt/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This repository contains an solution for Development Test.
    <br> 
</p>

## Screenshots

<p align="center">
  <a href="" rel="noopener">
  <img height=200px src="https://i.ibb.co/VDtsX0n/home.png" alt="porducts" border="0">
  <img height=200px src="https://i.ibb.co/Nmrrjrw/Menu.png" alt="porducts" border="0">
  <img height=200px src="https://i.ibb.co/mqdZdm9/Resgister.png" alt="porducts" border="0">
  <img height=200px src="https://i.ibb.co/vjcHQ04/Login.png" alt="porducts" border="0">
  <img height=200px src="https://i.ibb.co/P6HfkP3/porducts.png" alt="porducts" border="0">
  <img height=200px src="https://i.ibb.co/VvJ7SB0/Create.png" alt="porducts" border="0">  
  <img height=200px src="https://i.ibb.co/WKYCJn2/update.png" alt="porducts" border="0">
  </a>
 </a>
</p>

## Table of Contents

- [About](#about)
- [Tree Project](#tree_project)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>

This repository contains an example of Development Test. implement React + Redux + React-router-dom + Jwt + Bootstrap. using Create React App.

## Tree Project <a name = "tree_project"></a>

```
├─ src
│  ├─ controllers
│  │  └─ http
│  │     └─ PokemonController.ts
│  ├─ core
│  │  ├─ entities
│  │  │  └─ Pokemon.ts
│  │  ├─ interactors
│  │  │  ├─ index.ts
│  │  │  └─ pokemonInteractor.ts
│  │  └─ repositories
│  │     └─ pokemonRepository.ts
│  ├─ dataSources
│  │  ├─ PokemonDataSource.ts
│  │  └─ sequelize
│  │     ├─ index.ts
│  │     └─ PokemonModel.ts
│  └─ server
│     └─ index.ts
```

## Getting Started <a name = "getting_started"></a>

### `Prerequisites.`

```
node v14.17.6
```

Run API [https://github.com/sistemasnegros/product-backend-api-hex-arch-express-types](https://github.com/sistemasnegros/product-backend-api-hex-arch-express-types)

Create DB in the CLI mysql.

### `Clone Repository.`

```
git clone https://github.com/sistemasnegros/product-frontend-react-redux-jwt
```

### `Install Dependencies.`

```
cd product-frontend-react-redux-jwt
npm install
```

## Usage <a name = "usage"></a>

### `Start the app in the development mode.`

```
npm start
```

Note: make sure the API is running. [http://localhost:3001](http://localhost:3001)

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Run test APP.`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm test
```

Outout Test OK

```
 PASS  src/App.test.js
  √ renders Home Full-Stack (44 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.736 s
Ran all test suites.
```

### `Build app for production`

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## ✍️ Authors <a name = "authors"></a>

- [@sistemasnegros](https://github.com/sistemasnegros) - Idea & Initial work
