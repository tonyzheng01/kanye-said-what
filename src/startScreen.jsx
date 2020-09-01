import React, { Component } from "react";
import Footer from "./footer";
import { StartStyle, SpeechBubble, Banner } from "./styles/index.js";
import face from "./images/face.png";

class StartScreen extends Component {
  shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    return (
      <StartStyle>
        <Banner>
          <SpeechBubble>
            <h1>@#$%&!</h1>
          </SpeechBubble>
          <img src={face} alt="Ye Face" />
        </Banner>
        <p>
          Can you fill in the blank to some of Kanye's most iconic lines? For
          this game, only his solo albums are included, and there is at most one
          line per song. Yes, I know some songs have MANY iconic lines, but then
          every line you see will be from My Beautiful Dark Twisted Fantasy.
          It's current as of Jesus Is King. I may or may not update with
          subsequent albums. There are also easter eggs. Hope you enjoy. :)
          <br />
          DISCLAIMER: There will be explicit language. Nothing will be censored
          out of respect for the artist.
        </p>
        <button onClick={() => this.props.onStart()}>START</button>
        <Footer />
      </StartStyle>
    );
  }
}

export default StartScreen;
