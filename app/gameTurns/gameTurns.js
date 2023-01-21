const gameTurn = (generateCells) => {
  const cellStatus = [];

  for (let i = 0; i < generateCells.length; i++) {
    cellStatus[i] = [];
    for (let j = 0; j < generateCells.length; j++) {
      cellStatus[i][j] = generateCells[i][j].status;
    }
  }

  return cellStatus;
};

export default gameTurn;
