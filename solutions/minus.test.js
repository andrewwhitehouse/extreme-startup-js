const { minus } = require('./minus');

describe('subtracts numbers', () => {
  it('finds difference', () => {
    expect(minus("5d146be0: what is 11 minus 5")).toBe("6");
  })
});