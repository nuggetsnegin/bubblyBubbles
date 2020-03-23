import React, { Component } from 'react';
import plop from '../assets/bgm.mp3'
const bubbleSound = new Audio(plop)

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playBgm: false
    }
  }
  
  
  componentDidMount() {
    bubbleSound.addEventListener("ended", function() {
      bubbleSound.currentTime = 0;
      bubbleSound.play()
    })
  }

  toggleBgm = () => {
    if (this.state.playBgm) {
      bubbleSound.pause();
      this.setState({
        playBgm: false
      })
    } else {
      bubbleSound.play()
      this.setState({
        playBgm: true
      })
    }
  }
  
  render() {
    return (
      <header className="header">
        <h1 className="knockout">Bubbly Bubbles</h1>
        <button
          className={`bgmButton ${this.state.playBgm ? "bgmOn" : null}`}
          onClick={this.toggleBgm}
          >
          bgm {this.state.playBgm ? "off" : "on" }
        </button>
      </header>
    );
  }
}

export default Header;
