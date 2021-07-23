function power(question) {
  let matched = question.match(/what is (\d+) to the power of (\d+)/)
  if (matched !== null) {
    let num1 = parseInt(matched[1]);
    let exponent = parseInt(matched[2]);
    let result = BigInt(1);
    for(let i=0; i < exponent; i++) {
      result = result * BigInt(num1);
    }
    return "" + result;
  }
  console.log(`Question ${question} didn't match power`);
  return undefined;
}

module.exports = { power };