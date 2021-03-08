# Quoting Bad
Turing Mod 3 Niche Audience Project

## Overview

"Quoting Bad" is a React application built by [Richard Tyler](https://github.com/richardltyler/) from the [Turing](turing.io) School of Software and Design. The app was built for people who need to brush up on their Breaking Bad and Better Call Saul quotes. Richard created this app to practice and improve his capabilities with React and Cypress.

The technologies used in the building of this project include React.js, React-Router, and Cypress.io for testing.

The end product is a trivia game of Breaking Bad quotes. 

When a user loads the app, they will be given some rules and a button to begin playing the game. They are given a quote and 3 characters to choose from. After each round, they will find out if they got the question right or not. After 3 seconds, a new quote will appear. After 10 rounds, they are given a score, and after 5 seconds, they will be taken back to the home screen.

## How to Use and/or Contribute

To add more features to this project, or to simply view the code in action...

1. Clone this repo (or first fork it and then clone) using `git clone [THIS REPO'S SSH KEY] [OPTIONAL DIRECTORY NAME]` inside of your terminal.  
2. `cd` into that directory.  
3. Install any necessary dependencies using `npm install`.
4. Enter `npm run serve` to run the app on a local server or open the code in your text editor.  
5. The app should open automatically, but you can also navigate to `http://localhost:8080/` to view the app as well.

## Additional Features

- A full testing suite using Cypress.io, which incorporates Mocha and Chai, that tests all user flows.
- An 'Error' component in the case of a broken API 
- An 'About' page which explains the inspiration for the application, which also guides a user to the Github and LinkedIn profiles of the developers.

## App in Action
#### Main View - Enter & Beginning Game

<img width="600" alt="scrolling through desktop view" src="https://media.giphy.com/media/h4lucneWfCyizZKpvE/giphy.gif">

#### Main View - Making guesses and finishing the game

<img width="600" alt="scrolling through desktop view" src="https://media.giphy.com/media/16i1cA9iV2ALJPp6zt/giphy.gif">

#### Mobile View

<img width="278" alt="Screen Shot 2021-03-08 at 1 12 21 PM" src="https://user-images.githubusercontent.com/70095063/110376104-08c6a400-8010-11eb-90fa-060c1a094334.png">

   
## Future Iterations

- display an image with each character option
- display the correct character's image after each guess 
- display the user's right and wrong quotes

## Project Wins / Challenges

#### Wins

- Found new uses for React-Router including the `location` property
- 100% accessibility 

#### Challenges

- Walking Cypress tests through the game with all of the randomized components
- Formatting names of characters when the to match the different values in the API

### Links
The link to the spec sheet that guided this project: [Spec](https://frontend.turing.io/projects/module-3/niche-audience.html)

The link to the API used for the quotes: [API](https://breakingbadapi.com/documentation)

Go play the game here: [Game Link](https://richardltyler.github.io/quoting-bad/#/)
