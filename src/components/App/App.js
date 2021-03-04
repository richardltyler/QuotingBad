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
        {/* <header className="header">
          <section className="logo">
            <h1>
              <span className='logo-block'>Q</span>uoting<br></br>
              <span className='logo-block'>Ba</span>d
            </h1>
          </section>
        </header> */}
        <Header />
        <main>
        </main>
        <footer></footer>
      </div>
    )
  }
}

export default App;
