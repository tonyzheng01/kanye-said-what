import React from "react";

const album_map = {
  TCD: "The College Dropout",
  LR: "Late Registration",
  GR: "Graduation",
  808: "808s & Heartbreak",
  MBDTF: "My Beautiful Dark Twisted Fantasy",
  YZS: "Yeezus",
  TLOP: "The Life of Pablo",
  YE: "ye",
  JIK: "Jesus Is King",
};

const Question = (props) => {
  return (
    <div>
      <h1>
        On the song <span>{props.song}</span>, off the album
        <span>{album_map[props.album]}</span>
      </h1>
      <h1>Kanye West said...</h1>
      <h2>"{props.question.replace(/\*/g, "________")}"</h2>
    </div>
  );
};

export default Question;
