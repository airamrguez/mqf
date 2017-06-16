# mqf

> Like classNames for React but for MongoDB queries or whatever you want.

[![npm version](https://badge.fury.io/js/mqf.svg)](https://badge.fury.io/js/mqf)

## Usage

**Note:** mqf creates a new object with the filtered query.

```js
mqf(
  { a: 3 },
  [{ b: 5 }, !isNaN(3)],
  [{ c: 3 }, false]
);

// Output
// {
//   a: 3,
//   b: 5
// }
```

## MongoDB use case

Only admins or post author's can update a post.

```js
db
  .collection('posts')
  .filterAndUpdate(
    mqf(
      { _id: ObjectId(postId) },
      [{ authorId: ObjectId(currentUser._id) }, !isAdmin(currentUser)]
    )
  ).
  then(result => ...);

```
## License

MIT © [Airam Rguez](https://github.com/airamrguez)
