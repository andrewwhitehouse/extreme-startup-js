const { primes } = require('./primes');

describe('primes', () => {
  it('Identifys the prime numbers', () => {
    expect(primes("37287180: which of the following numbers are primes: 31, 269")).toBe("31, 269");
  })
  it('Identifys the prime numbers', () => {
    expect(primes("37287180: which of the following numbers are primes: 31, 24")).toBe("31");
  })
  
});