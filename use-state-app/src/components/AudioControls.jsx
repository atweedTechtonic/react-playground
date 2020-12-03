import React, { useState } from 'react';

const AudioList = () => {
  const [controls, setControls] = useState({
    volume: 0,
    treble: 0,
    mid: 0,
    bass: 0,
  });
  const { volume, treble, mid, bass } = controls;

  const increment = (control) => {
    setControls({
      ...controls,
      [control]: controls[control] + 1, // setting key: value and changing only that
    });
  };

  const decrement = (control) => {
    setControls({
      ...controls,
      [control]: controls[control] - 1,
    });
  };

  return (
    <>
      <h2>AudioControls</h2>
      <div>
        <button onClick={() => increment('volume')}>+</button>
        Volume: {volume}
        <button onClick={() => decrement('volume')}>-</button>
      </div>
      <div>
        <button onClick={() => increment('treble')}>+</button>
        Treble: {treble}
        <button onClick={() => decrement('treble')}>-</button>
      </div>
      <div>
        {' '}
        <button onClick={() => increment('mid')}>+</button>
        Mid: {mid}
        <button onClick={() => decrement('mid')}>-</button>
      </div>
      <div>
        <button onClick={() => increment('bass')}>+</button>
        Bass: {bass}
        <button onClick={() => decrement('bass')}>-</button>
      </div>
    </>
  );
};

export default AudioList;
