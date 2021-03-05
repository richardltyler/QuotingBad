import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes,
      currentQuote: this.props.quotes[0],
      characters: [],
      pastQuotes: [],
      correctAnswers: 0
    }
  }

  componentDidMount = () => {
    this.getCharacters();
  }

  getCharacters = () => {
    const characters = this.state.quotes.reduce((acc, quote) => {
      if (!acc.includes(quote.author)) {
        acc.push(quote.author);
      }

      return acc;
    }, [])
    
    this.setState({ characters: characters });
  }

  render() {
    return (
      <section className='quote-container'>
        <h2 className='headline'>QUOTE:</h2>
        <h3>{this.state.currentQuote.quote}</h3>
        <section className='cards-container'>
          <article className='card hover-states'>
            <img 
              className='card-image' 
              src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
              alt={this.state.currentQuote.author}
            />
            <h4>{this.state.currentQuote.author}</h4>
          </article>
          <article className='card hover-states'>
            <img 
              className='card-image' 
              src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
              alt={this.state.currentQuote.author}
            />
            <h4>{this.state.currentQuote.author}</h4>
          </article>
          <article className='card hover-states'>
            <img 
              className='card-image' 
              src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
              alt={this.state.currentQuote.author}
            />
            <h4>{this.state.currentQuote.author}</h4>
          </article>
        </section>
      </section>
    )
  }
}

export default Game;