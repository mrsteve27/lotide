const map = function (array, callback) {
  const mapResults = []
  for (const item of array) {
    mapResults.push(callback(item))
  }
  return mapResults
}

module.exports = map
