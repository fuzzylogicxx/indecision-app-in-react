# Indecision App

A simple React App which allows the user to enter some “options” then press a button to have one of those options be selected at random.

Demo version: [https://hughes-react-indecision.herokuapp.com/](https://hughes-react-indecision.herokuapp.com/)

## Run the app locally

### Prerequisites

Install [Node.js](https://nodejs.org/en/).

### Getting started

Fork this repository then `git clone` your new repo to get a local installation.

`cd` into your new project folder then `yarn` to install all package dependencies.

To run locally in development mode: `yarn run dev-server` which will run webpack and launch the app in a new browser window (such as http://localhost:8080).

To run locally in production mode: `yarn run build:prod` which will run webpack **in production mode**. Once that’s finished, `yarn run start` to start the Express server which you can then visit at [http://localhost:3000](http://localhost:3000).

## Features:
- React Component based architecture, using a combination of ES6 Classes and Stateless Functional Components. 
- Modern ES6 syntax including import and export, ES6 Classes and ES6 Class Properties.
- Uses Babel to transpile modern JavaScript syntax down to older JavaScript syntax for compatibility with older browsers.
- Uses webpack for running Babel, bundling JavaScript, minification, managing sourcemaps, and compiling SCSS to CSS.
- Styles follow [http://getbem.com/](BEM) conventions
- Includes webpack-dev-server for easily debuggable and hot-reloading development builds
- Includes 'production' config for deployment to Heroku, serving on an Express (Node) server, and running webpack (in production mode) post-build.