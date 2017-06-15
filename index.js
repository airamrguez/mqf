module.exports = function mqf() {
  const criterias = Array.from(arguments);
  const r = {};

  for (const item of criterias) {
    if (Array.isArray(item)) {
      const length = item.length;
      if (length >= 1 && length <= 2) {
        const [c, p = true] = item;
        if (typeof p !== 'boolean') {
          throw new Error(
            'Second array item must omitted or be a boolean value.'
          );
        }
        if (p) {
          Object.assign(r, c);
        }
      } else {
        throw new Error(
          `Length of the array ${JSON.stringify(item)} must be of 1 or 2`
        );
      }
    } else if (typeof item === 'object') {
      Object.assign(r, item);
    } else {
      throw new TypeError(`Unsupported type ${typeof item}`);
    }
  }
  return r;
};
