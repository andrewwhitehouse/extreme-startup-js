const { calculate } = require('./calculate');

describe('adds numbers', () => {
  it('finds sum', () => {
    expect(calculate("5d146be0: what is 11 plus 5")).toBe("16");
  })
  it('finds sum', () => {
    expect(calculate("5d146be0: what is 8 plus 5 plus 11")).toBe("24");
  })
  it('finds combination', () => {
    expect(calculate("b117bb20: what is 19 multiplied by 16 plus 11")).toBe("315");
  })
});