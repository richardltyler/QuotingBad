import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ character, makeGuess  }) => {
  return (
    <article className='card hover-states' id={character.character} onClick={event => makeGuess(event)}>
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

Card.propTypes = {
  character: PropTypes.object.isRequired,
  makeGuess: PropTypes.func.isRequired,
}

