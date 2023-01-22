const generateCells = (board) => {
  const generateRandomNumber = (max) => Math.random() * max;

  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      const randomNumber = generateRandomNumber(1);
      if (randomNumber < 0.3) {
        board[row][column] = {
          positionRow: row,
          positionColumn: column,
          status: 1,
        };
      } else {
        board[row][column] = {
          positionRow: row,
          positionColumn: column,
          status: 0,
        };
      }
    }
  }

  return board;
};

export default generateCells;
