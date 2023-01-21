const gameInit = (board) => {
  const generateRandomNumber = (max) => Math.floor(Math.random() * max);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const randomNumber = generateRandomNumber(2);
      if (randomNumber < 0.5) {
        board[i][j] = {
          positionRow: i,
          positionColumn: j,
          status: 1,
          willBeAlive: true,
          neighbours: 0,
        };
      } else {
        board[i][j] = {
          positionRow: i,
          positionColumn: j,
          status: 0,
          willBeAlive: false,
          neighbours: 0,
        };
      }
    }
  }

  return board;
};

export default gameInit;
