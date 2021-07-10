function largest(question) {
  if (question.indexOf('is the largest') !== -1) {
    let numSeparatorIndex = question.lastIndexOf(':');
    if (numSeparatorIndex !== -1) {
      let numbers = question.substring(numSeparatorIndex+1).split(", ").map(n => parseInt(n));
      let max = numbers.reduce((mx, item) => Math.max(mx, item));
      return "" + max;
    }
  }
  console.log(`Question ${question} didn't match largest`);
  return undefined;
}

module.exports = { largest };