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
        const formattedQuotes = quotes.map(quote => {
          this.getRealName(quote.author)
          return { author: this.getRealName(quote.author), quote: quote.quote }
        });
        this.setState({ quotes: formattedQuotes });
        this.getCharacters();
      })
  }

  getImages = (characters) => {
    const wholeChars = characters.map(char => {
      const newCharacter = {}
      const formattedName = this.formatName(char)
      httpRequests.getCharacters(formattedName)
        .then(image => newCharacter.img = image)

        newCharacter.character = char;

      

      return newCharacter;
    }, {});

    return wholeChars;
  }

  formatName = (name) => {
    return name.split(' ').join('+')
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

          {/* {!this.state.isHome &&  */}
            <Route 
              path='/about'
              render={() => <About />}
            />
          {/* // } */}

          {/* {this.state.isHome &&  */}
            <Route 
              exact path='/'
              render={() => <Start showQuote={this.showQuote}/>}
            />
          {/* // } */}
        </main>
        <Footer showQuote={this.showQuote}/>
      </div>
    )
  }
}

export default App;
