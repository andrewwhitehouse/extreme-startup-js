function anagram(question) {
  let matched = question.match(/is an anagram of "(.+)": (.+)/)
  if (matched !== null) {
    let target = matched[1].split('').sort().join('')
    let candidates = matched[2].split(", ")
    let anagrams = [];
    for(candidate of candidates) {
      if (candidate.split('').sort().join('') === target) {
        anagrams.push(candidate);
      }
    }
    return anagrams.join(', ');
  }
  console.log(`Question ${question} didn't match anagram`);
  return undefined;
}

module.exports = { anagram };