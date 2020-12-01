import React, { useState } from 'react';
import heads from '../images/heads.png';
import tails from '../images/tails.png';

const CoinFlipper = () => {
  const [roundCount, setRoundCount] = useState(0);
  const [image, setImage] = useState(null);
  const [flip, setFlip] = useState('');
  const [call, setCall] = useState('');

  const callFlip = (e) => {
    const call = e.target.getAttribute('data-call');
    const flip = Math.round(Math.random()) === 0 ? 'heads' : 'tails';

    setCall(call);
    setFlip(flip);
    setImage(flip === 'heads' ? heads : tails);
    setRoundCount(roundCount + 1);
  };

  return (
    <>
      <h1>Welcome to Coin Flipper!</h1>
      <p>Rounds so far: {roundCount}</p>
      {flip ? (
        <>
          <img src={image} />
          <h2>Your Call: {call}</h2>
          <h2>You {flip === call ? 'Won' : 'Lost'}!</h2>
        </>
      ) : (
        <h2>No flip yet! Make your call below to start a round!</h2>
      )}
      <section>
        <button onClick={callFlip} data-call="heads">
          Call Heads!
        </button>{' '}
        <button onClick={callFlip} data-call="tails">
          Call Tails!
        </button>
      </section>
    </>
  );
};

export default CoinFlipper;
