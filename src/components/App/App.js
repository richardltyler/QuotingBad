import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import heisenburg from '../assets/heisenberg.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  handleError = (response) => {
      if (response.includes('error')) {
        this.setState({ error: true });

      } else {
        return response;
      }
  }
  
  render() {
    return (
      <div className='App'>
        <Header />
        <img 
          className='heisenberg-background' 
          src={heisenburg} 
          
          alt='heisenburg sketch'>
        </img>
        <main className='main'>
            <Route 
              path='/error'
              render={() => <Error />}
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
                <Game handleError={this.handleError} />}
            />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;


