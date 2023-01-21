import boardConstructor from "./board/board.js";
import gameInit from "./gameinit/gameinit.js";
import gameTurn from "./gameTurns/gameTurns.js";

const rows = 20;
const columns = 20;

const board = boardConstructor(rows, columns);
const generateCells = gameInit(board);
const firstPopulation = gameTurn(generateCells);

console.table(firstPopulation);
