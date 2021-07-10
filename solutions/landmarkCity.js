function landmarkCity(question) {
  let matched = question.match(/which city is the (.+) in/);
  if (matched !== null) {
    let landmark = matched[1];
    let cities = { "Eiffel tower": "Paris" };
    return cities[landmark] || "";
  }
  console.log(`Question ${question} didn't match landmarkCity`);
  return undefined;
}

module.exports = { landmarkCity };
