import React from 'react';
import PropTypes from 'prop-types';
import './Start.css';

const Start = (props) => {
  const { startGame } = props;

  return (
    <section  className="rules-container">
      <h2 className="headline" >RULES</h2>
      <p>You will be given 10 quotes from Breaking Bad or Better Call Saul and 3 characters.</p>
      <p>Choose the character that you think authored the quote.</p> 
      <p>Refreshing or leaving the page will start a new game.</p>
      <h3>Be the one who knocks to start a game.</h3>
      
      <button 
        onClick={() => startGame()}
        className ="knock-button hover-states">
        KNOCK
      </button>
    </section>
  )
}

export default Start;

Start.propTypes = {
  startGame: PropTypes.func.isRequired,
}
