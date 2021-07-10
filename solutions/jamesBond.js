function jamesBond(question) {
  let matched = question.match(/who played James Bond in the film (.+)/);
  if (matched !== null) {
    let film = matched[1];
    let actors = { "Dr No": "Sean Connery" };
    return actors[film] || "";
  }
  console.log(`Question ${question} didn't match james bond`);
  return undefined;
}

module.exports = { jamesBond };
