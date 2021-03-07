import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      isHome: true,
    };
  }

  handleError = (response) => {
      if (response.includes('error')) {
        this.setState({ error: true });

      } else {
        return response;
      }
  }

  toggleHome = () => {
    this.setState({ isHome: !this.state.isHome });
  }

  goHome = () => {
    this.setState({ isHome: true });
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          isHome={this.state.isHome} 
          toggleHome={this.toggleHome} 
        />
        <main className="main">
            <Route 
              path='/error'
              render={() => <Error error={this.state.error} />}
            />

            {this.state.error && 
              <Redirect
                to='/error'
              /> }

            <Route 
              path='/about'
              render={() => <About />}
            />

            <Route
              exact path='/'
              render={() => 
                <Game 
                  handleError={this.handleError}
                />
              }
            />

        </main>
        <Footer toggleHome={this.toggleHome} />
      </div>
    )
  }
}

export default App;


