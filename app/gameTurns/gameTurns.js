const gameTurns = (cells) => {
  const cellStatus = [];

  for (let row = 0; row < cells.length; row++) {
    cellStatus[row] = [];
    for (let column = 0; column < cells.length; column++) {
      cellStatus[row][column] = cells[row][column].status;
    }
  }

  return cellStatus;
};

export default gameTurns;
