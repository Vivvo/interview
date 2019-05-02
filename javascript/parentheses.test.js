const parentheses = require('./parentheses')

test('one', () => {
  expect(parentheses.balance('()')).toBe('()')
})

// test('two', () => {
//   expect(parentheses.balance('a(b)c')).toBe('a(b)c')
// })

test('three', () => {
  expect(parentheses.balance(')(')).toBe('')
})

test('four', () => {
  expect(parentheses.balance('(((((')).toBe('')
})

test('five', () => {
  expect(parentheses.balance('(()()(')).toBe('()()')
})

test('six', () => {
  expect(parentheses.balance(')(())(')).toBe('(())')
})

test('seven', () => {
  expect(parentheses.balance(')())(()()(')).toBe('()()()')
})
