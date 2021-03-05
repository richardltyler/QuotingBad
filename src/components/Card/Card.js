import React from 'react';
import './Card.css';

const Card = ({ character }) => {
  return (
    <article className='card hover-states'>
      <img 
        className='card-image' 
        src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
        alt={character}
      />
      <h4>{character}</h4>
    </article>
  );
}

export default Card;