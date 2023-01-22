import boardConstructor from "./board/board.js";
import algorithm from "./gameAlgoritm/gameAlgoritm.js";
import generateCells from "./generateCells/generateCells.js";
import gameTurns from "./gameTurns/gameTurns.js";

const rows = 20;
const columns = 20;

const board = boardConstructor(rows, columns);
let cells = generateCells(board);

setInterval(() => {
  cells = algorithm(cells);
  console.table(gameTurns(cells));
}, 1000);
