import React from 'react';
import './Start.css';

const Start = (props) => {
  const { showQuote } = props;

  return (
    <section  className="rules-container">
      <h2 className="headline" >RULES</h2>
      <h3>You will be given a quote from a character in Breaking Bad and three characters.</h3>
      <h4>Choose the character that you think authored the quote.</h4> 
      <button onClick={() => showQuote()} className ="knock-button hover-states">KNOCK</button>
    </section>
  )
}

export default Start;