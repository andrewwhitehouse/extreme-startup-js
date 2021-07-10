const { primeMinister } = require('./primeMinister');

describe('Prime minister dates', () => {
  it('Returns year Theresa May was elected PM', () => {
    expect(primeMinister("64a7b230: which year was Theresa May first elected as the Prime Minister of Great Britain")).toBe("2016");
  })
});