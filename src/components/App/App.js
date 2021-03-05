import { Component } from 'react';
import { Route } from 'react-router-dom';
import httpRequests from '../../httpRequests.js';
import './App.css';
import Header from '../Header/Header';
import Start from '../Start/Start';
import Game from '../Game/Game';
import About from '../About/About';
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
        this.getCharacters()
      });
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

  showQuote = () => {
    this.setState({ isHome: false });
  }

  goHome = () => {
    this.setState({ isHome: true });
  }
  
  render() {
    return (
      <div className="App">
        <Header goHome={this.goHome}/>
        <main className="main">
          {!this.state.isHome && 
            <Route 
            path='/game'
            render={() => <Game quotes={this.state.quotes} characters={this.state.characters} />}
            />
          }

          {!this.state.isHome && 
            <Route 
                exact path='/about'
                render={() => <About />}
            />
          }

          {this.state.isHome && 
            <Route 
              path='/'
              render={() => <Start showQuote={this.showQuote} />}
            />
          }
        </main>
        <Footer showQuote={this.showQuote}/>} />
      </div>
    )
  }
}

export default App;
