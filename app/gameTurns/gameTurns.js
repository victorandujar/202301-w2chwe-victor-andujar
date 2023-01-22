const gameTurn = (cells) => {
  const cellStatus = [];

  for (let i = 0; i < cells.length; i++) {
    cellStatus[i] = [];
    for (let j = 0; j < cells.length; j++) {
      cellStatus[i][j] = cells[i][j].status;
    }
  }

  return cellStatus;
};

export default gameTurn;
