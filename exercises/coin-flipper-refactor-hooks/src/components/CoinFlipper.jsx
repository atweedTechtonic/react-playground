import React, { useState } from 'react';
import Button from './Button';
import heads from '../images/heads.png';
import tails from '../images/tails.png';

const CoinFlipper = () => {
  const [roundCount, setRoundCount] = useState(0);
  const [image, setImage] = useState(null);
  const [flip, setFlip] = useState('');
  const [call, setCall] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const callFlip = (playerCall) => {
    const call = playerCall;
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
        <Button name="Call Heads!" handleClick={() => callFlip('heads')} />
        <Button name="Call Tails!" handleClick={() => callFlip('tails')} />
      </section>
    </>
  );
};

export default CoinFlipper;
