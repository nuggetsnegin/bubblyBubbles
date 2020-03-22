import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          <span role="img" aria-label="fish emoji">
            🐟
          </span>{' '}
          Made with bubly thoughts by
          <span>
            <a href="https://www.negi.dev/" target="_blank">
              Negin Sauermann
            </a>
          </span>{' '}
          2020{' '}
          <span role="img" aria-label="fish emoji" className="ripple">
            🐟
          </span>
        </p>
      </footer>
    );
  }
}

export default Footer;
