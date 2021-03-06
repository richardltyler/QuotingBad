import React, { Component } from 'react';
import Start from '../Start/Start';
import Characters from '../Characters/Characters';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: false,
      quotes: this.props.quotes,
      currentQuote: {},
      currentOptions: [],
      characters: this.props.characters,
      pastQuotes: [],
      correctAnswers: 0,
      isLoading: true,
    }
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

    this.setState({ currentQuote: randomQuote });
  }

  startGame = () => {
    this.setState({ gameOn: true });
  }

  render() {
    return (
      <div>
        {!this.state.currentQuote && !this.state.gameOn && <h2>loading...</h2>}
        {!this.state.gameOn && this.state.currentQuote && <Start startGame={this.startGame}/>}

        {this.state.gameOn && this.state.currentQuote && 
          <section className='quote-container'>
            <h2 className='headline'>QUOTE:</h2>
            <h3>{this.state.currentQuote && this.state.currentQuote.quote}</h3>
            <Characters 
              getRandomIndex={this.getRandomIndex} 
              getWrongAnswer={this.getWrongAnswer} 
              correctAnswer={this.state.currentQuote.author} 
              characters={this.state.characters}/>
          </section>
        }
      </div>
    )
  }
}

export default Game;