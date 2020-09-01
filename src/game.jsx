import React, { Component } from "react";
import EndScreen from "./endScreen";
import Question from "./question";
import AnswersBox from "./answersBox";
import Footer from "./footer";
import { StyledGame } from "./styles/index.js";

import Maybe from "./images/maybe.jpg";
import Yup from "./images/yup.jpg";
import Nope from "./images/nope.jpg";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr: 0,
      correct: 0,
      total: 0,
      feedback: Maybe,
      disableButtons: false,
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }

  nextQuestion() {
    this.setState({ disableButtons: true });
    setTimeout(
      () =>
        this.setState({
          curr: this.state.curr + 1,
          feedback: Maybe,
          disableButtons: false,
        }),
      2000
    );
  }

  handleCorrect() {
    this.nextQuestion();
    this.setState({
      correct: this.state.correct + 1,
      total: this.state.total + 1,
      feedback: Yup,
    });
  }

  handleIncorrect() {
    this.nextQuestion();
    this.setState({ total: this.state.total + 1, feedback: Nope });
  }

  render() {
    if (this.state.curr < this.props.qas.length) {
      let curr_set = this.props.qas[this.state.curr];
      let all_ans = [];
      for (let i = 0; i < 4; i++) {
        all_ans.push(curr_set[i]);
      }

      let easterEgg = curr_set["Song"] === "Lost in the World";

      return (
        <StyledGame>
          <img src={this.state.feedback} alt="Feedback Face"></img>
          <h1>
            Your Score: {this.state.correct}/{this.state.total}
          </h1>
          <Question
            question={curr_set["Question"]}
            song={curr_set["Song"]}
            album={curr_set["Album"]}
          />
          <AnswersBox
            all_ans={all_ans}
            shuffle={this.props.shuffle}
            onCorrect={this.handleCorrect}
            onIncorrect={this.handleIncorrect}
            disabled={this.state.disableButtons}
            easterEgg={easterEgg}
          />
          <Footer />
        </StyledGame>
      );
    } else {
      return (
        <EndScreen correct={this.state.correct} total={this.state.total} />
      );
    }
  }
}

export default Game;
