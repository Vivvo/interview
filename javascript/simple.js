module.exports = () => {
  return {
    sum: (nums) => nums.reduce((curr, acc) => acc + curr, 0)
  }
}