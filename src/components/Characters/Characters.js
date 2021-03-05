import React from 'react';
import Card from '../Card/Card';
import './Characters.css';

const Characters = ({ characters }) => {
  const characterCards = characters.map((char, i) => {
    return <Card key={i} character={char} />;
  });

  return (
    <section className='cards-container'>
      <article className='card hover-states'>
        {characterCards}
      </article>
    </section>
  );
}

export default Characters;