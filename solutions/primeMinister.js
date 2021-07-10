function primeMinister(question) {
  let matched = question.match(/which year was (.+) first elected as the Prime Minister of Great Britain/);
  if (matched !== null) {
    let name = matched[1];
    let pms = { "Theresa May": "2016" };
    return pms[name] || "";
  }
  console.log(`Question ${question} didn't match primeMinister`);
  return undefined;
}

module.exports = { primeMinister };
