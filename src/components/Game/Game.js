import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Start from '../Start/Start';
import Characters from '../Characters/Characters';
import httpRequests from '../../httpRequests.js';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      characters: [],
      currentQuote: {},
      currentOptions: [],
      pastQuotes: [],
      correctAnswers: 0,
      gameOn: false,
      hasGuessed: false,
      guessedCorrect: false,
      gameOver: false,
      error: '',
    };
    this.baseState = this.state;
  }

  componentDidMount = () => {
    // console.log('yeet')
    // this.setState({ characters: this.props.characters, quotes: this.props.quotes } );
    this.getData();
    // this.getQuote();

  }

  getData = () => {
    httpRequests.getAllQuotes()
      .then(quotes => this.assignStateFromData(quotes))
      .then(() => this.getCharacters())
      .then(() => this.getQuote())
      .catch(() => {
        const error = `Real smooth. Slippin' Jimmy went and got an Error. Try again later or go to About to contact the developers with questions!`;

        this.setState({ error: error });
      });
  }

  assignStateFromData = (quotes) => {
    const formattedQuotes = quotes.map(quote => {
      // Try to delete this when you get this ish workiing
      this.getRealName(quote.author)
      return { author: this.getRealName(quote.author), quote: quote.quote }
    })

    this.setState({ quotes: formattedQuotes });
  }

  getRealName = (name) => {
    if (name === 'Jimmy McGill') {
      name = 'Saul Goodman';
    }

    const splitName = name.split(' ');
    if (splitName[0] === 'Gus') {
      splitName[0] = 'Gustavo';
    } else if (splitName[0] === 'Kim') {
      splitName[0] = 'Kimberly';
    } else if (splitName[0] === 'Hank') {
      splitName[0] = 'Henry'
    } else if (splitName[0] === 'Chuck') {
      splitName[0] = 'Charles'
    } 

    const newName = splitName.join(' ');
    return newName;
  }

  getCharacters = () => {
    const characters = this.state.quotes.reduce((acc, quote) => {
      if (!acc.includes(quote.author)) {
        acc.push(quote.author);
      }

      return acc;
    }, []);

    const wholeCharacters = this.getImages(characters);
    this.setState({ characters: wholeCharacters });
  }

  getImages = (characters) => {
    const wholeChars = characters.map(char => {
      const newCharacter = {}
      const formattedName = this.formatName(char)
      httpRequests.getCharacters(formattedName)
        .then(response => this.props.checkForError(response))
        .then(image => newCharacter.img = image)

      newCharacter.character = char;

      return newCharacter;
    }, {});

    return wholeChars;
  }

  formatName = (name) => {
    return name.split(' ').join('+')
  }

//   checkForError = (response) => {
//     if (response.includes('error')) {
//       this.setState({ error: response });

//     } else {
//       return response;
//     }
// }


  getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  createCharacterOptions = () => {
    const correctAnswer = this.getCorrectAnswer();
    const wrongAnswer1 = this.getWrongAnswer(correctAnswer);
    const wrongAnswer2 = this.getWrongAnswer(correctAnswer, wrongAnswer1);

    const answers = [wrongAnswer1, wrongAnswer2];
    const answersIndex = this.getRandomIndex(answers);

    answers.splice(answersIndex, 0, correctAnswer);

    this.setState({ currentOptions: answers });
  }

  getWrongAnswer = (answers, wrongAnswer) => {
    if (wrongAnswer) {
      answers = answers.filter(char => char.character !== wrongAnswer.character);
    }
      
    return answers[this.getRandomIndex(answers)];
  }

  getQuote = () => {
    console.log('yeet')
    const quotes = this.state.quotes;
    const randomQuote = quotes[this.getRandomIndex(quotes)];
    
    const filteredQuotes = quotes.filter(quote => quote !== randomQuote);

    this.setState({ quotes: filteredQuotes, currentQuote: randomQuote });
  }

  startGame = () => {
    this.setState({ gameOn: true });
  }

  makeGuess = event => {
    const guess = event.target.closest('article').id;
    const correctAnswer = this.state.currentQuote.author

    if (guess === correctAnswer) {
      this.setState({ correctAnswers: (this.state.correctAnswers + 1), guessedCorrect: true });
    } 

    this.setState({ pastQuotes: [...this.state.pastQuotes, this.state.currentQuote] });
    this.setState({ hasGuessed: true });
    
    this.checkForWin();
  }

  checkForWin = () => {
    const amountPastQuotes = this.state.pastQuotes.length + 1;
    if (amountPastQuotes > 2) {
      this.setState({ gameOver: true });
      setTimeout(() => {
        this.setState(this.baseState);
        this.getData();
      }, 3000);
    } else {
      this.switchQuote();
    }
  }

  switchQuote = () => {
    setTimeout(() => {
      this.getQuote();
      this.setState({ hasGuessed: false, guessedCorrect: false });
    }, 3000);
  }

  scoreGame = () => {
    const score = (this.state.correctAnswers / this.state.pastQuotes.length);
    const scorePercent = (score * 100).toFixed();

    return `${scorePercent}%`;
  }


  render() {
    return (
      <div>
        {!this.state.gameOn && !this.state.currentQuote && <h2>loading...</h2>}
        {!this.state.gameOn && this.state.currentQuote && <Start startGame={this.startGame}/>}

        {this.state.gameOn && this.state.currentQuote && !this.state.hasGuessed && 
          <section className='quote-container'>
            <h2 className='headline'>QUOTE:</h2>
            <h3>{this.state.currentQuote && this.state.currentQuote.quote}</h3>
            <Characters 
              getRandomIndex={this.getRandomIndex} 
              getWrongAnswer={this.getWrongAnswer} 
              correctAnswer={this.state.currentQuote.author} 
              characters={this.state.characters}
              makeGuess={this.makeGuess}/>
          </section>
        }

        {this.state.gameOn && this.state.hasGuessed && 
          <div>
            <h2>{this.state.guessedCorrect && 'Correct!'}</h2>
            <h2>{!this.state.guessedCorrect && 'Wrong, B****!'}</h2>
            <p>It was {this.state.currentQuote.author}!</p>
            <h3>{this.state.gameOver && 'Game Over!'}</h3>
            <p>{this.state.gameOver && `You got ${this.scoreGame()} right`}</p>
          </div>
          }
      </div>
    )
  }
}

export default Game;

Game.propTypes = {
      checkForError: PropTypes.func.isRequired,
}