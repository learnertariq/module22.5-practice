function countVowels(string) {
  const vowelsArr = ["a", "e", "i", "o", "u"];
  let couner = 0;
  // after converting to lowercase
  const newString = string.toLowerCase();
  for (let char of newString) {
    if (vowelsArr.indexOf(char) != -1) couner++;
  }

  return couner;
}

console.log(countVowels("GOd father"));
