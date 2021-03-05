import React from 'react';
import './Card.css';

const Card = ({ character }) => {
  return (
    <article className='card hover-states'>
      <img 
        className='card-image' 
        src={character.img}
        alt={character.character}
      />
      <h4>{character.character}</h4>
    </article>
  );
}

export default Card;