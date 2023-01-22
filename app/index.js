import boardConstructor from "./board/board.js";
import generateCells from "./gameinit/generateCells.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 20;
const columns = 20;

const board = boardConstructor(rows, columns);
const cells = generateCells(board);
const firstPopulation = gameTurn(cells);

console.table(firstPopulation);
