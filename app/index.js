import boardConstructor from "./board/board.js";
import algortim from "./gameAlgoritm/gameAlgoritm.js";
import generateCells from "./gameinit/generateCells.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 20;
const columns = 20;

const board = boardConstructor(rows, columns);
const cells = generateCells(board);
const firstPopulation = gameTurn(cells);
let gameTurns;

console.table(firstPopulation);

setInterval(() => {
  gameTurns = algortim(cells);
}, 1000);

console.table(gameTurns);
