import React, { Component } from 'react';
import heads from '../images/heads.png';
import tails from '../images/tails.png';

class CoinFlipper extends Component {
  state = {
    roundCount: 0,
    image: null,
    flip: '',
    call: '',
  };

  callFlip = (e) => {
    const call = e.target.getAttribute('data-call');
    const flip = Math.round(Math.random()) === 0 ? 'heads' : 'tails';

    this.setState({
      call,
      flip,
      image: flip === 'heads' ? heads : tails,
      roundCount: this.state.roundCount + 1,
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to Coin Flipper!</h1>
        <p>Rounds so far: {this.state.roundCount}</p>
        {this.state.flip ? (
          <>
            <img src={this.state.image} />
            <h2>Your Call: {this.state.call}</h2>
            <h2>You {this.state.flip === this.state.call ? 'Won' : 'Lost'}!</h2>
          </>
        ) : (
          <h2>No flip yet! Make your call below to start a round!</h2>
        )}
        <section>
          <button onClick={this.callFlip} data-call="heads">
            Call Heads!
          </button>{' '}
          <button onClick={this.callFlip} data-call="tails">
            Call Tails!
          </button>
        </section>
      </>
    );
  }
}

export default CoinFlipper;
