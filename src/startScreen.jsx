import React, { Component } from "react";
import Footer from "./footer";
import { StartStyle, SpeechBubble, Banner } from "./styles/index.js";
import face from "./images/face.png";

class StartScreen extends Component {
  constructor(props) {
    super(props);
    // this.handleStart = this.handleStart.bind(this);
    // this.handleCorrect = this.handleCorrect.bind(this);
    // this.handleIncorrect = this.handleIncorrect.bind(this);
    // this.getQuestion = this.getQuestion.bind(this);
  }

  shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  renderScreen() {
    if (!this.state.loaded) {
      return <h1>Loading...</h1>;
    } else {
      let answers = [];
      for (let i = 0; i <= 3; i++) {
        answers.push(this.state.all_qas[this.state.answered][i]);
      }
      const curr_question = this.state.all_qas[this.state.answered][
        "Question"
      ].replace(/\*/g, "________");
      const curr_ans = this.state.all_qas[this.state.answered]["0"];
      const curr_poss_ans = Object.assign({}, answers);
      const curr_album = this.state.all_qas[this.state.answered]["Album"];
      if (this.state.loaded) {
        // return (
        //   <div className="bg-red-900">
        //     <Question question={curr_question} />
        //     <Answers
        //       corr_ans={curr_ans}
        //       poss_ans={curr_poss_ans}
        //       album={curr_album}
        //       shuffle={this.shuffle}
        //       clickCorrect={this.handleCorrect}
        //       clickIncorrect={this.handleIncorrect}
        //     />
        //   </div>
        // );
      }
    }
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
