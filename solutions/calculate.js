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
  let matched = question.match(/what is (\d+) (.+) (\d+) (.+) (\d+)/)
  if (matched !== null) {
    let op1 = matched[2];
    let op2 = matched[4];
    if (op1 !== "plus" && op1 !== "multiplied by" && op1 !== "minus") {
      console.log(`Unrecognised op $[op1}`);
      return undefined;
    }
    if (op2 !== "plus" && op2 !== "multiplied by" && op2 !== "minus") {
      console.log(`Unrecognised op $[op2}`);
      return undefined;
    }
    let num1 = parseInt(matched[1]);
    let num2 = parseInt(matched[3]);
    let num3 = parseInt(matched[5]);
    let result = 0;
    if (op2 === "multiplied by") {
      let result2 = num2 * num3;
      result = (op1 == "plus") ? (num1 + result2) : (op1 == "minus" ? (num1 - result2) : num1 * result2);
    } else {
      let result1 = (op1 == "plus") ? (num1+num2) : (op1 == "minus" ? (num1-num2) : num1*num2);
      result = (op2 == "plus") ? (result1+num3) : (op2 == "minus" ? (result1-num3) : result1*num3);
    }

    return "" + result;
  }
  console.log(`Question ${question} didn't match plus3`);
  return undefined;
}

function calculate(question) {
  let result = plus3(question);
  return (result !== undefined) ? result : plus2(question);
}

module.exports = { calculate };