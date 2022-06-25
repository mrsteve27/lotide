const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Comparison Passed: ✅✅✅ ${arr1} === ${arr2}`);
    return;
  }

  console.log(`Comparison Failed: ❌❌❌ ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
