const mqf = require('./');

test('picks up single criteria arrays', () => {
  expect(mqf({ a: 3 })).toEqual({ a: 3 });
});

test('discards false criterias', () => {
  expect(mqf([{ b: 5 }, false])).toEqual({});
});

test('picks up true criterias discards false ones', () => {
  expect(mqf([{ b: 5 }, false], [{ c: { a: 3 } }, true])).toEqual({
    c: { a: 3 }
  });
});

test('omitting boolean value becames a true value', () => {
  const ObjectID = jest.fn();
  expect(mqf([{ $id: ObjectID('xyz') }])).toEqual({ $id: ObjectID('xyz') });
});

test('empty argument results an empty object', () => {
  expect(mqf()).toEqual({});
});

test('passing invalid arguments length throws an error', () => {
  expect(() => {
    mqf([{}, true, 3]);
  }).toThrow();
});

test('passing and invalid a second argument type to the array ctr throws an error', () => {
  expect(() => {
    mqf([{}, 'dough!']);
  }).toThrow();
});

test('non passing an object or array throws an error', () => {
  expect(() => {
    mqf('dough!');
  }).toThrow();
  expect(() => {
    mqf(3);
  }).toThrow();
  expect(() => {
    mqf(Symbol('wtf!'));
  }).toThrow();
});
