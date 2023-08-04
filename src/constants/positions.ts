export const horizontalVictoriousPositions = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15]
];

export const verticalVictoriousPositions = [
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15]
];

export const diagonalVictoriousPositions = [
  [0, 5, 10, 15],
  [3, 6, 9, 12]
];

export const victoriousPositions = [
  ...horizontalVictoriousPositions,
  ...verticalVictoriousPositions,
  ...diagonalVictoriousPositions,
];
