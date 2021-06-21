# Memory Card Game

This readme currently being updated.

WIP

## About

## How to Use

A live demo of the site is available [here](https://chargrilledchook.github.io/memory-card-game/).

To run this app on your local machine, clone this repository, navigate to the top level of the directory enter `npm start` in your terminal.
For more information see the [available scripts](## Available-Scripts)

## Reflections

## Tools Used

- React / createReactApp
- Lodash (for the shuffle function)

## Issues

- When card array is randomised, there is no check that there is a valid move the player can make. This means there is a chance for players to get impossible rounds when they hit a certain score (~25).

  - Easiest quick fix to this would be to instanstly reshuffle the array if it doesn't contain a non selected card, but this is not a particularly good algorithm.

- Card emojis in footer look different in different browsers. Some of the coloured versions are difficult to see against the background colour.

  - Test different browers with slightly different background colour palettes

- Card images are lazy loaded (by default). Since not all cards are shown at once, players (especially on first playthough) will have to wait for images to load.

  - Find a way to eager load images
  - and / or
  - use a loading spinner till all images are loaded
  - and / or
  - Show a default image (ie a card back) until all images are loaded

## Possible Future Features

- Make the gameplay "endless" - after reaching 52(or a multiple of), the selected flag of all cards is reset but the score persists
- Add more visual feedback when a player loses
- Ability to change difficulty of game
- Ability to pick different themes (ie different sets of images)
- Use external apis to fetch images instead of using static images, depending on theme

## Attributions

Card images taken from the [American Contract Bridge League](http://acbl.mybigcommerce.com/52-playing-cards/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
