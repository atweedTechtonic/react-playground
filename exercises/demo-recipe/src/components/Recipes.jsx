import React from 'react';
import Recipe from './Recipe';
import { results } from '../recipes.json';

const Recipes = () => {
  console.log('results', results);
  return (
    <ul>
      {results.map((recipe) => {
        return (
          <li key={recipe.id}>
            <Recipe
              title={recipe.title}
              directions={recipe.href}
              ingredients={recipe.ingredients}
              thumbnail={recipe.thumbnail}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Recipes;
