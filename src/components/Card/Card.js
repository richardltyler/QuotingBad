import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ character, makeGuess }) => {
  return (
    <article
      className="card hover-states"
      id={character}
      onClick={(event) => makeGuess(event)}
    >
      <h4>{character}</h4>
    </article>
  );
};

export default Card;

Card.propTypes = {
  character: PropTypes.string.isRequired,
  makeGuess: PropTypes.func.isRequired,
};
