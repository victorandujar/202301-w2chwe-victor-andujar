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
        cells[row + i][column + j].checked = true;
      }
    }
  }

  return neighbours;
};

const algortim = (cells) => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells.length; j++) {
      const neighbours = countNeighbours(cells, i, j);
      if (cells[i][j].status === 1 && neighbours > 1 && neighbours < 4) {
        cells[i][j].status = 1;
        if (!cells[i][j].checked) {
          cells[i][j].status = 1;
        }
      } else {
        cells[i][j].status = 0;
      }

      if (cells[i][j].status === 0 && neighbours === 3) {
        cells[i][j].status = 1;
      }
    }
  }

  return cells;
};

export default algortim;
