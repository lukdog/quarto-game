import { HTMLProps } from "react";
import { clsx } from "clsx";

type SquareProps = HTMLProps<HTMLButtonElement> & {
  value: string;
  index: number;
  winnerPosition?: boolean;
  indexesWithoutBorderRight: number[];
  totalCount: number;
  elemPerLine: number;
};

export function Square({ value, disabled, index, selected, indexesWithoutBorderRight, totalCount, elemPerLine, ...props }: SquareProps) {
  return (
    <button
      className={clsx(
        "w-24 h-24 font-bold text-3xl disabled:cursor-not-allowed",
        {
          "border-b border-blue-500":
            indexesWithoutBorderRight.includes(index) && index < totalCount-1 && !selected && !props.winnerPosition,
        },
        {
          "border-r border-blue-500": index > totalCount-elemPerLine-1 && index < totalCount-1 && !selected && !props.winnerPosition,
        },
        {
          "border-r border-b border-blue-500":
            !indexesWithoutBorderRight.includes(index) && index <= totalCount-elemPerLine-1 && !selected && !props.winnerPosition,
        },
        {
          "border-4 border-blue-500": selected || props.winnerPosition,
        }
      )}
      {...props}
      disabled={disabled}
      type="button"
      aria-label={String(index)}
    >
      {value}
    </button>
  );
}
