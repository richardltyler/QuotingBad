import { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;
