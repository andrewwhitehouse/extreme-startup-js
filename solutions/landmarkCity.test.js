const { landmarkCity } = require('./landmarkCity');

describe('Landmark cities', () => {
  it('Returns city for Eiffel tower', () => {
    expect(landmarkCity("63ffe050: which city is the Eiffel tower in")).toBe("Paris");
  })
});