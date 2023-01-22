import boardConstructor from "./board/board.js";
import algoritm from "./gameAlgoritm/gameAlgoritm.js";
import generateCells from "./generateCells/generateCells.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 40;
const columns = 40;

const board = boardConstructor(rows, columns);
const cells = generateCells(board);
const firstPopulation = gameTurn(cells);

console.table(firstPopulation);

setInterval(() => {
  algoritm(cells);
  console.table(gameTurn(cells));
}, 1000);
