import { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <h2>RULES</h2>
          <section  className="rules-container">
            <h3>You will be given a quote from a character in Breaking Bad and three characters.</h3>
            <h4>Choose the character that you think authored the quote.</h4> 
          </section>
          <button className="knock-button">KNOCK</button>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
