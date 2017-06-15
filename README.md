# mqf

Like classNames for React but for MongoDB queries or whatever you want.


[![npm version](https://badge.fury.io/js/mqf.svg)](https://badge.fury.io/js/mqf)

## Usage

**Note:** mqf creates a new object with the filtered query.

```js
mqf(
  { a: 3 }],
  [{ b: 5 }, !isNaN(3)],
  [{ c: 3 }, false
);

// Output
// {
//   a: 3,
//   b: 5
// }
```