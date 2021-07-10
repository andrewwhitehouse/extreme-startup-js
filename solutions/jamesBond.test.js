const { jamesBond } = require('./jamesBond');

describe('jamesBond', () => {
  it('Identifys james bond characters', () => {
    expect(jamesBond("c6c745d0: who played James Bond in the film Dr No")).toBe("Sean Connery");
  })
});