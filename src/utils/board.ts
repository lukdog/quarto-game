import { victoriousPositions } from "@quarto-game/constants/positions";
import { Board } from "../@types/Board";

export function getCurrentPlayer(board: Board) {
  const moves = board.filter((value) => value != "").length;
  return moves % 2 != 0 ? "PlayerA" : "PlayerB";
}

export function getWinner(board: Board) {
 
  const winner = victoriousPositions.find((list) =>
    {
      const [a, b, c, d] = list;
      return areSimilar(board[a], board[b], board[c], board[d]);
    }
  );
  
  return winner;

}
export function areSimilar(a: string, b: string, c: string, d: string){

  if(a === "" || b === "" || c === "" || d === "") return false;

  let similar = true;
  for(let i= 0; i<a.length && !similar; i++){
    b.indexOf(a[i]) !== -1 && c.indexOf(a[i]) !== -1 && d.indexOf(a[i]) !== -1 ? similar = true : similar = false;
  }

  return similar;
}

export function getIsGameOver(board: Board) {
  const winner = getWinner(board);
  const isBoardFilled = board.every((value) => value !== "");
  return Boolean(winner) || isBoardFilled;
}
