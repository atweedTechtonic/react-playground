import React, { useState } from 'react';
import heads from '../images/heads.png';
import tails from '../images/tails.png';

const CoinFlipper = () => {
  const [roundCount, setRoundCount] = useState(0);
  const [image, setImage] = useState(null);
  const [flip, setFlip] = useState('');
  const [call, setCall] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const callFlip = (e) => {
    const call = e.target.getAttribute('data-call'); // getAttribute - gets value from button click
    const flip = Math.round(Math.random()) === 0 ? 'heads' : 'tails';

    setCall(call);
    setFlip(flip);
    setImage(flip === 'heads' ? heads : tails); // shows correct image for the flip
    setRoundCount(roundCount + 1);
    setWins(call === flip ? wins + 1 : wins);
    setLosses(call !== flip ? losses + 1 : losses);
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
        // initial screen (when flip = '')
        <h2>No flip yet! Make your call below to start a round!</h2>
      )}
      <section>
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
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
