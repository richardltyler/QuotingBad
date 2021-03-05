import React from 'react';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters, correctAnswer, getRandomIndex }) => {
  const correctAuthor = characters.find(char => char.character === correctAnswer);
  const wrongAnswers = characters.filter(char => char.character !== correctAnswer);
  const wrongAnswer1 = wrongAnswers[getRandomIndex(wrongAnswers)];
  const wrongAnswer2 = wrongAnswers[getRandomIndex(wrongAnswers, wrongAnswer1)];
  // console.log()
  const options = [wrongAnswer1, wrongAnswer2];
  options.splice(getRandomIndex(options), 0, correctAuthor);

  const characterCards = options.map((char, i) => {
    return <Card key={i} character={char} />;
  });

  return (
    <section className='cards-container'>
        {correctAnswer && characterCards}
    </section>
  );
}

export default Characters;