# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @steve0227/lotide`

**Require it:**

`const _ = require('@steve0227/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEqual(...)`: Will take in two arrays and console.log an appropriate message to the console.
* `assertEqual(...)`: Compares the two values it takes in and print out a message telling us if they match or not.
* `assertObjectEquals(...)`: Will take in two objects and console.log an appropriate message to the console.
* `countLetters(...)`: Will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(...)`: Given an array and an object. It will return an object containing counts of everything that the input object listed.
* `eqArrays(...)`: A function which takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(...)`: A function which will take in two objects and returns true or false, based on a perfect match.
* `findKeys(...)`: A function which takes in an object and a callback, and returns the first key for which the callback returns a truthy value.
* `findKeysByValue(...)`:  A function which takes in an object and a value, and returns the first key which contains the given value.
* `flatten(...)`:A function that takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `head(...)`: A function which returns the first item in the array.
* `letterPositions(...)`: Will return all the indices in the string where each character is found.
* `map(...)`: Will take in an array and a callback and return a new array based on the results of the callback function
* `middle(...)`: Will take in an array and return the middle-most element(s) of the given array.
* `tail(...)`: A function which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(...)`: Will take in an array and a callback and will keep collecting items from the provided array until the callback provided returns a truthy value.
* `without(...)`: Will return a subset of a given array, removing unwanted elements.
