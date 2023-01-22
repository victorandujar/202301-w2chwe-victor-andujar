import boardConstructor from "./board/board.js";
import algorithm from "./gameAlgoritm/gameAlgoritm.js";
import generateCells from "./generateCells/generateCells.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 40;
const columns = 40;

const board = boardConstructor(rows, columns);
let cells = generateCells(board);
const firstPopulation = gameTurn(cells);

console.table(firstPopulation);

setInterval(() => {
  cells = algorithm(cells);
  console.table(gameTurn(cells));
}, 1000);
