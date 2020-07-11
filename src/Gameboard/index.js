import React, { useState, useEffect } from "react";

import {
  Board,
  Square,
  GamePad,
  ColorButton,
  Header,
  Life,
  ResetButton,
  WinMessage,
  NextButton,
} from "./styles";

const green = "#5cdb95";
const pink = "#edb5bf";
const purple = "#2f2fa2";
const gray = "#564f6f";
const red = "#fc4445";
const yellow = "#fce181";
let maxLife = 30;

const GameBoard = () => {
  const [board, setBoard] = useState(
    Array(196).fill({ isTouched: false, color: "" })
  );

  const [life, setLife] = useState(30);
  const [isOver, setIsOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  let updatedBoard;

  const rebootBoard = () => {
    setIsOver(false);
    setIsWin(false);
    maxLife = 30;
    setLife(maxLife);
    updatedBoard = [...board];
    updatedBoard = updatedBoard.map((square) => {
      return { isTouched: false, color: getRandomColor() };
    });
    updatedBoard[0].isTouched = true;
    checkBoard();
    setBoard(updatedBoard);
  };

  const setupBoard = (maxLife) => {
    setIsOver(false);
    setIsWin(false);
    setLife(maxLife);
    updatedBoard = [...board];
    updatedBoard = updatedBoard.map((square) => {
      return { isTouched: false, color: getRandomColor() };
    });
    updatedBoard[0].isTouched = true;
    checkBoard();
    setBoard(updatedBoard);
  };

  const getRandomColor = () => {
    const colors = [green, pink, purple, gray, red, yellow];
    const random = Math.floor(Math.random() * 6);
    return colors[random];
  };

  const setColor = (color) => {
    updatedBoard = [...board];
    updatedBoard = updatedBoard.map((square) => {
      if (square.isTouched === true) {
        return { ...square, color: color };
      }
      return square;
    });
    checkBoard();
    setBoard(updatedBoard);
    checkWinCondition();
    setLife(life - 1);
  };

  const checkBoard = () => {
    for (let i = 0; i < 196; i++) {
      checkSquare(i);
    }
  };

  const checkSquare = (index) => {
    if (index === 0) {
      checkRight(index);
      checkBottom(index);
    } else if (index > 0 && index < 13) {
      checkLeft(index);
      checkBottom(index);
      checkRight(index);
    } else if (index === 13) {
      checkLeft(index);
      checkBottom(index);
    } else if (index === 182) {
      checkTop(index);
      checkRight(index);
    } else if (index > 182 && index < 195) {
      checkTop(index);
      checkLeft(index);
      checkRight(index);
    } else if (index === 195) {
      checkTop(index);
      checkLeft(index);
    } else if (
      index === 14 ||
      index === 28 ||
      index === 42 ||
      index === 56 ||
      index === 70 ||
      index === 84 ||
      index === 98 ||
      index === 112 ||
      index === 126 ||
      index === 140 ||
      index === 154 ||
      index === 168
    ) {
      checkTop(index);
      checkRight(index);
      checkBottom(index);
    } else if (
      index === 27 ||
      index === 41 ||
      index === 55 ||
      index === 69 ||
      index === 83 ||
      index === 97 ||
      index === 111 ||
      index === 125 ||
      index === 139 ||
      index === 153 ||
      index === 167 ||
      index === 181
    ) {
      checkTop(index);
      checkLeft(index);
      checkBottom(index);
    } else {
      checkTop(index);
      checkRight(index);
      checkBottom(index);
      checkLeft(index);
    }
  };

  const checkTop = (index) => {
    const secondIndex = index - 14;
    paintSquare(index, secondIndex);
  };

  const checkBottom = (index) => {
    const secondIndex = index + 14;
    paintSquare(index, secondIndex);
  };

  const checkLeft = (index) => {
    const secondIndex = index - 1;
    paintSquare(index, secondIndex);
  };

  const checkRight = (index) => {
    const secondIndex = index + 1;
    paintSquare(index, secondIndex);
  };

  const paintSquare = (index, secondIndex) => {
    if (
      updatedBoard[index].isTouched === true &&
      updatedBoard[secondIndex].isTouched === false &&
      updatedBoard[secondIndex].color === updatedBoard[index].color
    ) {
      updatedBoard[secondIndex].isTouched = true;
    }
  };

  const checkWinCondition = () => {
    let count = 0;

    for (let i = 0; i < 196; i++) {
      if (updatedBoard[i].isTouched === true) {
        count++;
      }
    }
    if (count === 196) {
      maxLife--;
      setIsOver(true);
      setIsWin(true);
    } else {
      if (life === 1) {
        maxLife = 30;
        setIsOver(true);
        setIsWin(false);
      }
    }
  };

  useEffect(() => {
    setupBoard(maxLife);
  }, []);

  return (
    <>
      <Header>
        <Life>{life}</Life>
        <ResetButton onClick={rebootBoard}>Restart</ResetButton>
      </Header>
      <Board>
        {board.map((square) => {
          return <Square color={square.color} />;
        })}
      </Board>
      <GamePad>
        {isOver && isWin && (
          <Header>
            <WinMessage>You Win! ;D</WinMessage>
            <NextButton onClick={() => setupBoard(maxLife)}>Next Level</NextButton>
          </Header>
        )}
        {isOver && !isWin && (
          <Header>
            <WinMessage>You Lose :/</WinMessage>
            <ResetButton onClick={rebootBoard}>Try Again</ResetButton>
          </Header>
        )}
        {!isOver && (
          <>
            {" "}
            <ColorButton
              color={green}
              onClick={() => setColor(green)}
            ></ColorButton>
            <ColorButton
              color={pink}
              onClick={() => setColor(pink)}
            ></ColorButton>
            <ColorButton
              color={purple}
              onClick={() => setColor(purple)}
            ></ColorButton>
            <ColorButton
              color={gray}
              onClick={() => setColor(gray)}
            ></ColorButton>
            <ColorButton
              color={red}
              onClick={() => setColor(red)}
            ></ColorButton>
            <ColorButton
              color={yellow}
              onClick={() => setColor(yellow)}
            ></ColorButton>{" "}
          </>
        )}
      </GamePad>
    </>
  );
};

export default GameBoard;
