import React from "react";

import GameBoard from "./Gameboard";

import "./App.css";
import { Wrapper, Title, Credits } from "./styles";

function App() {
  return (
    <Wrapper>
      <Title>Contagium</Title>
      <GameBoard />
      <Credits>Princessbey®</Credits>
    </Wrapper>
  );
}

export default App;
