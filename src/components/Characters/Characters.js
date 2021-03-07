import React from 'react';
import PropTypes, { object } from 'prop-types';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters, correctAnswer, getWrongAnswer, makeGuess }) => {
  const correctAuthor = characters.find(char => char.character === correctAnswer);
  const wrongAnswers = characters.filter(char => char.character !== correctAnswer);
  
  const wrongAnswer1 = getWrongAnswer(wrongAnswers);
  const wrongAnswer2 = getWrongAnswer(wrongAnswers, wrongAnswer1);
  const options = [wrongAnswer1, wrongAnswer2];
  
  const randomI = Math.floor(Math.random() * 3);
  
  options.splice(randomI, 0, correctAuthor);

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
  characters: PropTypes.arrayOf(object).isRequired,
  correctAnswer: PropTypes.string.isRequired, 
  getWrongAnswer: PropTypes.func.isRequired, 
  makeGuess: PropTypes.func.isRequired,
}