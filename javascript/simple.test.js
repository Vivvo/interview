const simple = require('./simple')

test('sum the numbers in an array', () => {
  let s = simple()
  expect(s.sum([1, 7, 4, 1, 11, 22])).toBe(46)
})