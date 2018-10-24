const WordStream = require("./WordStream");


test('expect reading 5 to return jakej', () => {
  let wordStream = new WordStream({word: "jake"});

  expect(wordStream.read(5).toString("utf8")).toBe("jakej");
});