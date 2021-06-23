# ♥️ Memory Card Game ♠️

A fun little memory game to train your brain. Can you get a score of 52?

####[Play](https://chargrilledchook.github.io/memory-card-game/)

## About

A React practice project with a focus on learning hooks. Done as part of [The Odin Project's](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/memory-card) curriculum.

### How to Play

There are 52 cards in total, but only 25 are displayed on screen at a time.
Don't pick the same card twice, or your score will be reset and you're back to square one.

## How to Use

A live demo of the site is available [here](https://chargrilledchook.github.io/memory-card-game/).

To run this app on your local machine, clone this repository, navigate to the top level of the directory enter `npm start` in your terminal.

For more information see the [available scripts](#available-scripts).

## Reflections

Overall an enjoyable project with a nice result. There were several features I wanted to add that missed the cut for this version, but overall a very solid MVP.

#### Hooks

Hooks were less of a conceptual shift than I was anticipating, and felt more like learning an alternate syntax than a different style altogether. On balance code written in hooks feels cleaner and I'll likely continue with them for my next project.

The only thing I couldn't directly emulate from class components was the setstate callback, which ultimately had a better solution than handling within state.

### Managing State

Thinking about where state should go seems to be one of the more tricky things with React in general, and I needed to refactor several times to get my state and functions right. I've tried to stick to the React doc's [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) recommendations and rules of thumb.

A couple of times I found myself adding on wrappers to functions as I passed them down to props - unsure if this is a good pattern or not. Probably fine in a small project like this, but it's likely better to aim to keep the functions 'cleaner' so they're easier to reason about as they flow down - have tried to do a bit of research on this topic but haven't found anything definitive yet.

In the course of my research I learnt about "prop drilling" and the use of reducers to combat the downsides in extreme cases - something to experiment with next time.

#### CSS

The amount of CSS for this project is reasonably low, so I elected to go with a single main CSS file with styling and a second with set up / boilerplate and a normalise import. While I've recently learned component scoped CSS is probably ideal, the simplicity and ease of a single file outweighed it in this case.

Ideally I'd like to experiment more with CSS modules or perhaps styled components in the next project where that makes sense.

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
