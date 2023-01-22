const countNeighbours = (cells, row, column) => {
  let neighbours = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (
        i !== 0 &&
        j !== 0 &&
        cells[row + i] &&
        cells[row + i][column + j] &&
        cells[row + i][column + j].status === 1
      ) {
        neighbours++;
        cells[i][j].checked = true;
      }
    }
  }

  return neighbours;
};

const algortim = (cells) => {
  const eachTurnBoard = cells;
  for (let i = 0; i < eachTurnBoard.length; i++) {
    for (let j = 0; j < eachTurnBoard[i].length; j++) {
      const neighbours = countNeighbours(eachTurnBoard, i, j);
      if (
        eachTurnBoard[i][j].status === 1 &&
        neighbours > 1 &&
        neighbours < 4
      ) {
        eachTurnBoard[i][j].status = 1;
        if (!eachTurnBoard[i][j].checked) {
          // Add new neighbour
        }
      } else {
        eachTurnBoard[i][j].status = 0;
      }
    }
  }

  return eachTurnBoard;
};

export default algortim;
