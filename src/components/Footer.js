import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="note">
          <p>
            {' '}
            I made{' '}
            <a
              href="https://nuggetsnegin.github.io/wishyWashy/"
              target="_blank"
            >
              WishyWashy
            </a>{' '}
            in 2019 - the first version of this project! The original intent was
            to send an anonymous wish into the wishy washy ocean. Surfing the
            'net' has been a bit hard lately, so I figured why not repurpose
            this project into some goodness. My co-worker helped compiled some
            great mental health{' '}
            <a
              href="https://docs.google.com/document/d/1_uD7IAe8SqTGsbZOeTXW5lCRCnLzv0MZJ8Rx8SFurkc/edit"
              target="_blank"
            >
              {' '}
              resources
            </a>{' '}
            that I think are wonderful. Stay safe everyone, I miss your lovely
            faces. - <span>Negin</span>
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
