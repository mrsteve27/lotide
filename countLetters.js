const countLetters = function (string) {
  const result = {}

  for (const letter of string) {
    if (letter !== ' ') {
      result[letter] = result[letter] + 1 || 1
    }
  }
  return result
}
module.exports = countLetters
