const fibonacci = require('./fibonacci')

test('fib 1', () => {
  let fib = fibonacci()
  expect(fib.calc(1)).toBe(1)
})

test('fib 2', () => {
  let fib = fibonacci()
  expect(fib.calc(2)).toBe(1)
})

test('fib 3', () => {
  let fib = fibonacci()
  expect(fib.calc(3)).toBe(2)
})

test('fib 4', () => {
  let fib = fibonacci()
  expect(fib.calc(4)).toBe(3)
})

test('fib 5', () => {
  let fib = fibonacci()
  expect(fib.calc(5)).toBe(5)
})

test('fib 6', () => {
  let fib = fibonacci()
  expect(fib.calc(6)).toBe(8)
})

test.skip('fib 90', () => {
  let fib = fibonacci()
  expect(fib.calc(90)).toBe(2880067194370816120)
})
