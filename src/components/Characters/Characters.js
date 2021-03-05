import React from 'react';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters }) => {
  console.log(characters)
  const characterCards = characters.map((char, i) => {
    return <Card key={i} character={char} />;
  });

  return (
    <section className='cards-container'>
        {characterCards}
    </section>
  );
}

export default Characters;