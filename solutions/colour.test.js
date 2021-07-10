const { colour } = require('./colour');

describe('Object colour', () => {
  it('Returns colour of a banana', () => {
    expect(colour("c6f6b8e0: what colour is a banana")).toBe("yellow");
  })
});