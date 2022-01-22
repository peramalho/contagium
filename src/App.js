import React from "react";

import GameBoard from "./Gameboard";

import "./App.css";
import { Wrapper, Title } from "./styles";

function App() {
  return (
    <Wrapper>
      <Title>Contagium</Title>
      <GameBoard />
    </Wrapper>
  );
}

export default App;
