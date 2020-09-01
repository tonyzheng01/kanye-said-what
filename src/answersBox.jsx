import React, { Component } from "react";
import { StyledAnswers } from "./styles/index.js";

class AnswersBox extends Component {
  render() {
    let answers = [];
    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        answers.push(
          <button disabled={this.props.disabled} onClick={this.props.onCorrect}>
            {this.props.all_ans[i]}
          </button>
        );
      } else {
        if (this.props.easterEgg) {
          answers.push(
            <button
              disabled={this.props.disabled}
              onClick={this.props.onCorrect}
            >
              {this.props.all_ans[i]}
            </button>
          );
        } else {
          answers.push(
            <button
              disabled={this.props.disabled}
              onClick={this.props.onIncorrect}
            >
              {this.props.all_ans[i]}
            </button>
          );
        }
      }
    }

    if (!this.props.disabled) {
      answers = this.props.shuffle(answers);
    }

    return <StyledAnswers>{answers}</StyledAnswers>;
  }
}

export default AnswersBox;
