import { Component } from 'react';
import httpRequests from '../../httpRequests.js';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      characters: [],
      isHome: true
    };
  }

  componentDidMount() {
    httpRequests.getAllQuotes()
      .then(quotes => {
        this.setState({ quotes: quotes });
        this.getCharacters(quotes);
      });
  }

  getCharacters(quotes) {
    const characters = quotes.reduce((acc, quote) => {
      if (!acc.includes(quote.author)) {
        acc.push(quote.author);
      }

      return acc;
    }, [])
    
    this.setState({ characters: characters });
  }

  showQuote() {
    this.setState({isHome: false });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <h2>RULES</h2>
          {this.state.isHome && 
            <section  className="rules-container">
              <h3>You will be given a quote from a character in Breaking Bad and three characters.</h3>
              <h4>Choose the character that you think authored the quote.</h4> 
              <button onClick={() => this.showQuote()} className ="knock-button hover-states">KNOCK</button>
            </section>
          }

          {!this.state.isHome && 
          <section className='quote-container'>
              <h2>{this.state.quotes[0].quote}</h2>
              <section className='cards-container'>
                <article className='card hover-states'>
                  <img 
                    className='card-image' 
                    src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
                    alt={this.state.characters[0]}
                  />
                  <h3>{this.state.characters[0]}</h3>
                </article>
                <article className='card hover-states'>
                  <img 
                    className='card-image' 
                    src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
                    alt={this.state.characters[1]}
                  />
                  <h3>{this.state.characters[1]}</h3>
                </article>
                <article className='card hover-states'>
                  <img 
                    className='card-image' 
                    src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
                    alt={this.state.characters[2]}
                  />
                  <h3>{this.state.characters[2]}</h3>
                </article>
              </section>
            </section>
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
