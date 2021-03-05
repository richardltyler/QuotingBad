import { Component } from 'react';
import { Route } from 'react-router-dom';
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
      isHome: true
    };
  }

  componentDidMount = () => {
    httpRequests.getAllQuotes()
      .then(quotes => {
        this.setState({ quotes: quotes });
      });
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
          {this.state.isHome && 
          <Route 
            path='/' 
            render={() => <Start showQuote={this.showQuote} />}
          />
          }

          {!this.state.isHome && 
          <Route 
            path='/game'
            
            render={() => <Game  quotes={this.state.quotes}/>}
          />
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
