const ReadableStream = require("stream").Readable;

class WordStream extends ReadableStream {
  constructor(options) {
    super(options);

    if (!options.word) {
      throw new Error("Invalid options.word argument!");
    }
    this.word = options.word;
    this.wordLength = options.word.length;
  }

  _read(bytes) {
    while(this.push(new Array(Math.floor(bytes / this.wordLength)).fill(this.word).join(""))) {
    }
  }
}

module.exports = WordStream;