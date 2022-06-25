const takeUntil = function(array, callback) {
  const result = [];
  for (const elem of array) {
    if (callback(elem)) {
      return result;
    }
    result.push(elem);
  }
};

module.exports = takeUntil;
