import React from 'react';
import ShoppingList from './components/ShoppingList';

const App = () => {
  return (
    <section className="main">
      <h2>Shopping List</h2>
      <article>
        <ShoppingList />
      </article>
    </section>
  );
};

export default App;
