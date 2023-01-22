const countNeighbours = (cells, row, column) => {
  let neighbours = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      if (
        cells[row + i] &&
        cells[row + i][column + j] &&
        cells[row + i][column + j].status === 1
      ) {
        neighbours++;
        cells[row + i][column + j].checked = true;
      }
    }
  }

  return neighbours;
};

const algoritm = (cells) => {
  for (let row = 0; row < cells.length; row++) {
    for (let column = 0; column < cells.length; column++) {
      const neighbours = countNeighbours(cells, row, column);
      if (cells[row][column].status === 1 && neighbours > 1 && neighbours < 4) {
        cells[row][column].status = 1;
      } else {
        cells[row][column].status = 0;
      }

      if (cells[row][column].status === 0 && neighbours === 3) {
        cells[row][column].status = 1;
      }
    }
  }

  return cells;
};

export default algoritm;
