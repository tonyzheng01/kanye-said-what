import React from "react";
import { StyledEnd } from "./styles/index.js";

const EndScreen = (props) => {
  return (
    <StyledEnd>
      You made it to the end with a total score of {props.correct}/{props.total}
      . Thank you so much for playing!
      <a href="https://github.com/tonyzheng01" target="blank">
        GitHub
      </a>
    </StyledEnd>
  );
};

export default EndScreen;
