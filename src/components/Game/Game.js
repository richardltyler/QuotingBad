import React, { Component } from 'react';
import Characters from '../Characters/Characters';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes,
      currentQuote: {},
      characters: this.props.characters,
      pastQuotes: [],
      correctAnswers: 0
    }
  }

  componentDidMount = () => {
    // this.props.showQuote();
    this.getQuote();
  }

  getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  createCharacterOptions = () => {
    const correctAnswer = this.state.currentQuote.author;
    const wrongAnswer1 = this.getWrongAnswer(correctAnswer);
    const wrongAnswer2 = this.getWrongAnswer(correctAnswer);

    const answers = [wrongAnswer1, wrongAnswer2];
    const answersIndex = this.getRandomIndex(answers);

    answers.splice(answersIndex, 0, correctAnswer);

    return answers;
  }

  getWrongAnswer = (correctAnswer) => {
    const wrongAnswers = this.state.characters.filter(char => char !== correctAnswer)
    
    return wrongAnswers[this.getRandomIndex(wrongAnswers)];
  }

  getQuote = () => {
    const quotes = this.state.quotes;
    const randomQuote = quotes[this.getRandomIndex(quotes)];

    this.setState({ currentQuote: randomQuote });
  }

  render() {
    return (
      <section className='quote-container'>
        <h2 className='headline'>QUOTE:</h2>
        <h3>{this.state.currentQuote && this.state.currentQuote.quote}</h3>
        <Characters characters={this.createCharacterOptions()}/>
      </section>
    )
  }
}

export default Game;