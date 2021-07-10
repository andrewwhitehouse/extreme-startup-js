function colour(question) {
  let matched = question.match(/what colour is a (.+)/);
  if (matched !== null) {
    let item = matched[1];
    let colours = { "banana": "yellow" };
    return colours[item] || "";
  }
  console.log(`Question ${question} didn't match colour`);
  return undefined;
}

module.exports = { colour };
