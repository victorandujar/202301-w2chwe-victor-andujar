import boardConstructor from "./board/board.js";
import algortim from "./gameAlgoritm/gameAlgoritm.js";
import generateCells from "./generateCells/generateCells.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 10;
const columns = 10;

const board = boardConstructor(rows, columns);
const cells = generateCells(board);
const firstPopulation = gameTurn(cells);

console.table(firstPopulation);

setInterval(() => {
  algortim(cells);
  console.table(gameTurn(cells));
}, 1000);
