import React from "react";
import { StyledAnswers } from "./styles/index.js";

const AnswersBox = (props) => {
  let answers = [];
  props.order.forEach((i) => {
    if (i === 0) {
      answers.push(
        <button disabled={props.disabled} onClick={props.onCorrect}>
          {props.all_ans[i]}
        </button>
      );
    } else {
      answers.push(
        <button disabled={props.disabled} onClick={props.onIncorrect}>
          {props.all_ans[i]}
        </button>
      );
    }
  });

  return <StyledAnswers>{answers}</StyledAnswers>;
};

export default AnswersBox;
