module.exports = () => {
  let fibonacci = {
    cache: {},
    calc: (n) => {
      if (n === 1 || n === 2) {
        return 1
      }
      if (fibonacci.cache[n]) {
        return fibonacci.cache[n]
      }

      let res = fibonacci.calc(n - 1) + fibonacci.calc(n - 2)
      fibonacci.cache[n] = res
      return res

    }
  }
  return fibonacci
}