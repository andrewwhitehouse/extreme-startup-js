const { plus } = require('./plus');

describe('adds numbers', () => {
  it('finds sum', () => {
    expect(plus("5d146be0: what is 11 plus 5")).toBe("16");
  })
});