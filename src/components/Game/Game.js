import React, { Component } from 'react';
import Start from '../Start/Start';
import Characters from '../Characters/Characters';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes,
      characters: this.props.characters,
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
    this.getQuote();
  }

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
    
    // this.switchQuote();
    this.checkForWin();
    // setTimeout(() => {
    //   this.switchQuote();
    //   this.setState({ hasGuessed: false })
    // }, 5000);
  }

  checkForWin = () => {
    const amountOfQuotes = this.state.quotes.length;
    const amountPastQuotes = this.state.pastQuotes.length + 1 ;
    if ( amountPastQuotes > 1 ) {
      this.setState({ gameOver: true });
      // this.props.resetGame();
      setTimeout(() => {
        this.setState(this.baseState);
        this.getQuote();
      }, 3000);
    } else {
      this.switchQuote();
    }
  }

  switchQuote = () => {
    setTimeout(() => {
      this.getQuote();
      this.setState({ hasGuessed: false, guessedCorrect: false });
    }, 5000);
  }

  scoreGame = () => {
    const score = (this.state.correctAnswers / this.state.pastQuotes.length);
    const scorePercent = (score * 100).toFixed();

    return `${scorePercent}%`;
  }


  render() {
    return (
      <div>
        {!this.state.currentQuote && !this.state.gameOn && <h2>loading...</h2>}
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