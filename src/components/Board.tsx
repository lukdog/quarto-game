import { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import { LineWinner } from "./LineWinner";
import { RenderIf } from "./RenderIf";
import { Square } from "./Square";
import {Pawn} from "../@types/Pawn";

const boardInitialState = Array<string>(16).fill("");
const initialPawns: Pawn[] = ["SREW","SRFW","SQEW","SQFW","TREW","TRFW","TQEW","TQFW","SREB","SRFB","SQEB","SQFB","TREB","TRFB","TQEB","TQFB"];

export function Board() {
  const [board, setBoard] = useState(boardInitialState);
  const { player, winner, winnerLine, isGameOver } = useBoard(board);
  const [pawns, setPawns] = useState<Pawn[]>([...initialPawns]);
  const [pawn, setPawnIndex] = useState(-1);
 

  function handleChooseSquare(index: number) {

    if(pawn < 0) return;

    const boardCopy = [...board];
    boardCopy[index] = pawns[pawn];
    delete pawns[pawn];
    setPawnIndex(-1);
    setBoard(boardCopy);
  }

  function handleChoosePawn(index: number) {
    setPawnIndex(index);
  }

  function handleRestartGame() {
    setPawns([...initialPawns]);
    setBoard(boardInitialState);
    setPawnIndex(-1);
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <section>
        <RenderIf condition={!winner && isGameOver}>
          <h1 className="text-center text-2xl font-bold mb-8">Tie!</h1>
        </RenderIf>
        <RenderIf condition={winner === "PlayerA"}>
          <h1 className="text-center text-2xl font-bold mb-8">Player A wins!</h1>
        </RenderIf>
        <RenderIf condition={winner === "PlayerB"}>
          <h1 className="text-center text-2xl font-bold mb-8">Player B wins!</h1>
        </RenderIf>
        <RenderIf condition={!winner && !isGameOver}>
          <h1 className="text-center text-2xl font-bold mb-8">
            {player}'s turn
          </h1>
        </RenderIf>
        <div className="grid grid-cols-4 grid-rows-4 relative">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              disabled={value !== "" || Boolean(winner) || isGameOver}
              index={index}
              winnerPosition={winnerLine?.includes(index)}
              onClick={() => handleChooseSquare(index)}
              indexesWithoutBorderRight={[3,7,11,15]}
              elemPerLine={4}
              totalCount={16}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="grid grid-cols-8 grid-rows-2 relative my-10">
          {pawns.map((value, index) => (
            <Square
              key={index}
              value={value}
              disabled={Boolean(winner) || isGameOver}
              index={index}
              selected={index === pawn}
              onClick={() => handleChoosePawn(index)}
              indexesWithoutBorderRight={[7,15]}
              elemPerLine={8}
              totalCount={16}
            />
          ))}

        </div>
      </section>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-80 py-4 rounded transition-colors duration-300"
        type="button"
        onClick={handleRestartGame}
      >
        Restart
      </button>
    </div>
  );
}
