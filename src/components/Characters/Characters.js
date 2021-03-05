import React from 'react';
import './Characters.css';

const Characters = ({ characters }) => {
  // console.log(characters)
  return (
    <section className='cards-container'>
      <article className='card hover-states'>
        <img 
          className='card-image' 
          src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
          alt={characters[0]}
        />
        <h4>{characters[0]}</h4>
      </article>
      <article className='card hover-states'>
        <img 
          className='card-image' 
          src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
          alt={characters[1]}
        />
        <h4>{characters[1]}</h4>
      </article>
      <article className='card hover-states'>
        <img 
          className='card-image' 
          src='https://i.pinimg.com/originals/88/6f/73/886f7314a80498b233d365a26262bc12.jpg'
          alt={characters[2]}
        />
        <h4>{characters[2]}</h4>
      </article>
    </section>
  );
}

export default Characters;