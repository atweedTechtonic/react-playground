import React, { useState } from 'react';

const RandomList = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const getRandomNumbers = () => {
    // copying existing random numbers when adding new number to array
    setRandomNumbers([...randomNumbers, Math.random() * 20]);
  };

  return (
    <>
      <h2>Random Number List</h2>
      <button onClick={getRandomNumbers}>Add a number</button>
      <ul>
        {randomNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
};

export default RandomList;
