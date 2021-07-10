const { fibonacci } = require('./fibonacci');

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

describe('finds Fibonacci numbers', () => {
  it('finds nth number in sequence', () => {
    expect(fibonacci("2376df80: what is the 6th number in the Fibonacci sequence")).toBe("8");
  })
});