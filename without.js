const without = function (arr1, arr2) {
  const processedArr = []
  for (const index of arr1) {
    if (!arr2.includes(index)) {
      processedArr.push(index)
    }
  }
  return processedArr
}

module.exports = without
