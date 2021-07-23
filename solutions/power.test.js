const { power } = require('./power');

describe('calculates powers', () => {
  it('power', () => {
    expect(power("5d146be0: what is 12 to the power of 13")).toBe("106993205379072");
  })
});