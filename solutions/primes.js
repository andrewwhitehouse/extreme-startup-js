const isPrime = (number)=>{
  for(let i = 2;i<=Math.floor(Math.sqrt(number));i++){
    if(number%i == 0){
      return false
    }
  }
  return true
}
function primes(question) {
  if (question.indexOf('numbers are primes') !== -1) {
    let numSeparatorIndex = question.lastIndexOf(':');
    if (numSeparatorIndex !== -1) {
      let numbers = question.substring(numSeparatorIndex+1).split(", ").map(n => parseInt(n));
      let prime = numbers.filter(number => isPrime(number))
      return prime.join(", ")
    }
  }
  console.log(`Question ${question} didn't match primes`);
  return undefined;
}

module.exports = { primes };
