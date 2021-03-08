import React from 'react';
import PropTypes from 'prop-types';
import utilities from '../../utilities.js';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters, correctAnswer, makeGuess }) => {
  const wrongAnswers = characters.filter(char => char !== correctAnswer);
  
  const wrongAnswer1 = utilities.getWrongAnswer(wrongAnswers);
  const wrongAnswer2 = utilities.getWrongAnswer(wrongAnswers, wrongAnswer1);
  const options = [wrongAnswer1, wrongAnswer2];
  
  const randomI = Math.floor(Math.random() * 3);
  
  options.splice(randomI, 0, correctAnswer);

  const characterCards = options.map((char, i) => {
    return <Card makeGuess={makeGuess} key={i} character={char} />;
  });

  return (
    <section className='cards-container'>
        {correctAnswer && characters && characterCards}
    </section>
  );
}

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
  correctAnswer: PropTypes.string.isRequired, 
  // getWrongAnswer: PropTypes.func.isRequired, 
  makeGuess: PropTypes.func.isRequired,
}