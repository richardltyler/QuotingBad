import React from 'react';
import PropTypes from 'prop-types';

const Turn = (props) => {
  const { isCorrect, correctAuthor, gameOver } = props;
  return (
    <div>
            <h2>{isCorrect && 'Correct!'}</h2>
            <h2>{!isCorrect && 'S\'all good man! You\'ll get em next time.'}</h2>
            <p>It was {correctAuthor}!</p>
            {gameOver && 
              <div>
                <h3>{this.state.gameOver && 'Game Over!'}</h3>
                <p>{this.state.gameOver && `You got ${this.scoreGame()} right`}</p>
              </div>
            }
          </div>
  )
}

export default Turn;

Turn.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  correctAuthor: PropTypes.string.isRequired,
  gameOver: PropTypes.bool.isRequired,
}