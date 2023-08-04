import { Player } from "@quarto-game/@types/Player";
import { Board } from "../@types/Board";
import { getCurrentPlayer, getIsGameOver, getWinner } from "../utils/board";

type UseBoardResponse = {
  player: Player;
  winner: Player | null;
  winnerLine: number[] | undefined;
  isGameOver: boolean;
};

export function useBoard(board: Board): UseBoardResponse {
  const player = getCurrentPlayer(board);
  const winnerLine = getWinner(board);
  const winner = winnerLine ? player : null;

  const isGameOver = getIsGameOver(board);
  return { player, winner, winnerLine, isGameOver };
}
