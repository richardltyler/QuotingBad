import { Component } from 'react';
import httpRequests from '../../httpRequests.js';
import './App.css';
import Header from '../Header/Header';
import Start from '../Start/Start';
import Game from '../Game/Game';
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

  componentDidMount = () => {
    httpRequests.getAllQuotes()
      .then(quotes => {
        this.setState({ quotes: quotes });
        this.getCharacters(quotes);
      });
  }

  getCharacters = (quotes) => {
    const characters = quotes.reduce((acc, quote) => {
      if (!acc.includes(quote.author)) {
        acc.push(quote.author);
      }

      return acc;
    }, [])
    
    this.setState({ characters: characters });
  }

  showQuote = () => {
    this.setState({ isHome: false });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          {this.state.isHome && 
            <Start showQuote={this.showQuote}/>
          }

          {!this.state.isHome && 
            <Game quote={this.state.quotes[0]}/>
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
