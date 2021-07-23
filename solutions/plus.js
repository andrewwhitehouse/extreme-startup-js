function plus2(question) {
  let matched = question.match(/what is (\d+) plus (\d+)/)
  if (matched !== null) {
    let num1 = parseInt(matched[1]);
    let num2 = parseInt(matched[2]);
    return "" + (num1+num2);
  }
  console.log(`Question ${question} didn't match plus`);
  return undefined;
}

function plus3(question) {
  let matched = question.match(/what is (\d+) plus (\d+) plus (\d+)/)
  if (matched !== null) {
    let num1 = parseInt(matched[1]);
    let num2 = parseInt(matched[2]);
    let num3 = parseInt(matched[3]);
    return "" + (num1+num2+num3);
  }
  console.log(`Question ${question} didn't match plus3`);
  return undefined;
}

function plus(question) {
  let result = plus3(question);
  return (result !== undefined) ? result : plus2(question);
}

module.exports = { plus };