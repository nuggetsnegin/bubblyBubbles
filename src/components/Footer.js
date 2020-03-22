import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="note">
          <p>
            {' '}
            I made{' '}
            <a href="https://nuggetsnegin.github.io/wishyWashy/">
              WishyWashy
            </a>{' '}
            in 2019 - the first version of this project! The original intent was
            to send an anonymous wish into the wishy washy ocean. Surfing the
            'net' has been a bit hard lately, so I figured why not repurpose
            this project into some goodness. Stay safe everyone, I miss your
            lovely faces. - <span>Negin</span>
          </p>
        </div>
        <div>
          <p>
            <span role="img" aria-label="fish emoji">
              🐟
            </span>{' '}
            Made with bubbly thoughts by{' '}
            <a href="https://www.negi.dev/" target="_blank">
              Negin Sauermann
            </a>{' '}
            2020{' '}
            <span role="img" aria-label="fish emoji" className="ripple">
              🐟
            </span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
