import React from 'react';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters, correctAnswer, getRandomIndex, getWrongAnswer}) => {
  const correctAuthor = characters.find(char => char.character === correctAnswer);
  const wrongAnswers = characters.filter(char => char.character !== correctAnswer);
  // console.log(correctAnswer) 
  const wrongAnswer1 = getWrongAnswer(wrongAnswers);
  const wrongAnswer2 = getWrongAnswer(wrongAnswers, wrongAnswer1);
  const options = [wrongAnswer1, wrongAnswer2];
  const randomI = getRandomIndex(options);
  console.log(randomI, correctAnswer)
  options.splice(randomI, 0, correctAuthor);

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