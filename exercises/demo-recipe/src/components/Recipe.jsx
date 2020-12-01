import React from 'react';

const Recipe = ({ title, ingredients, directions, thumbnail }) => {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <img className="card__img" src={thumbnail} />
      <p className="card__ingredients">{ingredients}</p>
      <a className="card__directions" href={directions}>
        Directions
      </a>
    </article>
  );
};

export default Recipe;
