import styled from "styled-components";

export const Life = styled.h2`
  font-size: 2.0em;
  font-weight: 400;
  letter-spacing: 0.1em;
  /* margin: 5px 0 5px 0; */
  color: #555;
`;

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(14, 30px);
  grid-template-columns: repeat(14, 30px);
  grid-gap: 1px;

  @media(max-width: 800px) {
    grid-template-rows: repeat(14, 20px);
  grid-template-columns: repeat(14, 20px);
  }
`;

export const Square = styled.div`
  background: ${(props) => props.color};
  transition: 0.5s ease;
`;

export const ColorButton = styled.div`
  background: ${(props) => props.color};
  cursor: pointer;
  padding: 30px 30px;
  border: 1px solid #dcdce6;
  border-radius: 6px;
  :hover {
    opacity: 0.7;
  }

  @media(max-width: 800px) {
    padding: 25px 25px;
  }
`;

export const GamePad = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  border-radius: 6px;
`;


export const ResetButton = styled.button`
  padding: 8px 15px;
  cursor: pointer;
  border: 1px solid #dcdce6;
  border-radius: 3px;
  background: #00887a;
  margin-left: 50px;
  color: #eee;
  :hover {
    opacity: 0.9;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const WinMessage = styled.h2`
    font-size: 2.0em;
  font-weight: 400;
  letter-spacing: 0.1em;
  /* margin: 5px 0 5px 0; */
  color: #555;
`;

export const NextButton = styled.button`
  padding: 8px 15px;
  cursor: pointer;
  border: 1px solid #dcdce6;
  border-radius: 3px;
  background: #ee4c7c;
  margin-left: 50px;
  color: #eee;
  :hover {
    opacity: 0.9;
  }
`;