import React, { Component } from "react";
import StartScreen from "./startScreen";
import Game from "./game";

import Papa from "papaparse";
import lyrics from "./lyrics.csv";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      started: false,
    };
  }

  // loads in csv and shuffles
  componentDidMount() {
    fetch(lyrics)
      .then((response) => response.text())
      .then((data) =>
        this.shuffle(Papa.parse(data, { header: true })["data"].slice(0, -1))
      )
      .then((shuffled) => {
        this.setState({
          all_qas: shuffled,
          loaded: true,
        });
      });
  }

  shuffle(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleStart = () => {
    this.setState({ started: true });
  };

  render() {
    if (!this.state.started) {
      return <StartScreen onStart={this.handleStart} />;
    } else {
      return <Game qas={this.state.all_qas} shuffle={this.shuffle} />;
    }
  }
}

export default App;
