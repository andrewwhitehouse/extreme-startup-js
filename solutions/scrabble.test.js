const { scrabbleScore } = require('./scrabble');

describe('finds scrabble scores', () => {
  it('calculates scrabble score for zoo', () => {
    expect(scrabbleScore("8d3ddb40: what is the english scrabble score of zoo")).toBe("12");
  })
  it('calculates scrabble score for ruby', () => {
    expect(scrabbleScore("91aeffd0: what is the english scrabble score of ruby")).toBe("9");
  })
});