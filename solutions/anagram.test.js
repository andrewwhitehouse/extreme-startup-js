const { anagram } = require('./anagram');

describe('anagram', () => {
  it('anagrams of listen', () => {
    expect(anagram("08b357e0: which of the following is an anagram of \"listen\": silent, enlists, google, banana")).toBe("silent");
  })
});