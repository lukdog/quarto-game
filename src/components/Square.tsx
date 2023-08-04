import { HTMLProps } from "react";
import { clsx } from "clsx";

type SquareProps = HTMLProps<HTMLButtonElement> & {
  value: string;
  index: number;
};

const indexesWithoutBorderRight = [3,7,11,15];

export function Square({ value, disabled, index, ...props }: SquareProps) {
  return (
    <button
      className={clsx(
        "w-24 h-24 font-bold text-4xl disabled:cursor-not-allowed",
        {
          "border-b border-blue-500":
            indexesWithoutBorderRight.includes(index) && index < 15,
        },
        {
          "border-r border-blue-500": index > 11 && index < 15,
        },
        {
          "border-r border-b border-blue-500":
            !indexesWithoutBorderRight.includes(index) && index <= 11,
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
