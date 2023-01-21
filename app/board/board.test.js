import boardConstructor from "./board";

describe("Given a function boardConstructor", () => {
  describe("When it receives 1 and 1", () => {
    test("Then it should return an array [[0]]", () => {
      const row = 1;
      const column = 1;
      const expectedOutput = [[0]];

      const result = boardConstructor(row, column);

      expect(result).toEqual(expectedOutput);
    });
  });
});
