const { largest } = require('./largest');

describe('largest', () => {
  it('finds largest', () => {
    expect(largest("26956fd0: which of the following numbers is the largest: 12, 607, 318, 67")).toBe("607");
  })
  it('finds another largest', () => {
    expect(largest("20f63b80: which of the following numbers is the largest: 54, 605")).toBe("605");
  })
});