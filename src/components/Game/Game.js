import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Start from '../Start/Start';
import Characters from '../Characters/Characters';
import Turn from '../Turn/Turn';
import httpRequests from '../../httpRequests.js';
import utilities from '../../utilities.js';
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
    };
    this.baseState = this.state;
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    httpRequests.getAllQuotes()
      .then(quotes => this.assignQuotesFromData(quotes))
      .then(() => this.getCharacters())
      .then(() => this.getQuote())
      .catch(() => this.props.handleError('error'));
  }

  assignQuotesFromData = (quotes) => {
    const formattedQuotes = quotes.map(quote => {
      return { id: quote.quote_id, author: utilities.getRealName(quote.author), quote: quote.quote }
    })

    this.setState({ quotes: formattedQuotes });
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
      const formattedName = utilities.formatName(char);
      httpRequests.getCharacters(formattedName)
        .then(response => this.props.handleError(response))
        .then(image => newCharacter.img = image)

      newCharacter.character = char;

      return newCharacter;
    }, {});

    return wholeChars;
  }

  getWrongAnswer = (answers, wrongAnswer) => {
    if (wrongAnswer) {
      answers = answers.filter(char => char.character !== wrongAnswer.character);
    }
      
    return answers[utilities.getRandomIndex(answers)];
  }

  getQuote = () => {
    const quotes = this.state.quotes;
    console.log(this.state.quotes)
    const randomQuote = quotes[utilities.getRandomIndex(quotes)];
    
    const filteredQuotes = quotes.filter(quote => quote !== randomQuote);

    this.setState({ quotes: filteredQuotes, currentQuote: randomQuote });
  }

  startGame = () => {
    this.setState({ gameOn: true });
  }

  makeGuess = (event) => {
    const guess = event.target.closest('article').id;
    const correctAnswer = this.state.currentQuote.author

    if (guess === correctAnswer) {
      this.setState({ correctAnswers: (this.state.correctAnswers + 1), guessedCorrect: true });
    } 

    this.setState({ pastQuotes: [...this.state.pastQuotes, this.state.currentQuote], hasGuessed: true });
    
    this.checkForWin();
  }

  checkForWin = () => {
    const amountPastQuotes = this.state.pastQuotes.length + 1;
    if (amountPastQuotes > 9) {
      this.setState({ gameOver: true });
      setTimeout(() => {
        this.setState(this.baseState);
        this.getData();
      }, 5000);
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
      <section>
        {!this.state.gameOn 
          && !this.state.currentQuote && 
          <h2>loading...</h2>}

        {!this.state.gameOn 
          && this.state.currentQuote
          && <Start startGame={this.startGame}/>}

        {this.state.gameOn 
          && this.state.currentQuote 
          && !this.state.hasGuessed 
          && this.state.characters && 
          <section className='quote-container'>
            <h2 className='headline'>QUOTE:</h2>
            <h3>{this.state.currentQuote.quote}</h3>
            <Characters 
              key={this.state.currentQuote.id}
              getWrongAnswer={this.getWrongAnswer} 
              correctAnswer={this.state.currentQuote.author} 
              characters={this.state.characters}
              makeGuess={this.makeGuess}
            />
          </section>
        }

        {this.state.gameOn 
          && this.state.hasGuessed && 
          <Turn 
            isCorrect={this.state.guessedCorrect}
            correctAuthor={this.state.currentQuote.author}
            gameOver={this.state.gameOver}
            scoreGame={this.scoreGame}
          />
        }
      </section>
    )
  }
}

export default Game;

Game.propTypes = {
      handleError: PropTypes.func.isRequired,
}