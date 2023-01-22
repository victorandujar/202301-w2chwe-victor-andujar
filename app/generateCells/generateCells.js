const gameInit = (board) => {
  const generateRandomNumber = (max) => Math.random() * max;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const randomNumber = generateRandomNumber(1);
      if (randomNumber < 0.4) {
        board[i][j] = {
          positionRow: i,
          positionColumn: j,
          status: 1,
          checked: false,
          neighbours: 0,
        };
      } else {
        board[i][j] = {
          positionRow: i,
          positionColumn: j,
          status: 0,
          checked: false,
          neighbours: 0,
        };
      }
    }
  }

  return board;
};

export default gameInit;
