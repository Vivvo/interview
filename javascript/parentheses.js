const balance = (s) => {
  let open = []
  let output = ''
  let streak = 0
  for (i of s) {
    if (i === '(') {
      open.push('(')
      streak = 0
    } else if (i === ')') {
      if (open.length > 0) {
        open.pop()
        if (streak > 0) output = '(' + output + ')' // TODO: streaks larger than 1 e.g. ((())) = 2 streak
        else output += '()'
        streak++
      }
    } else {
      output += s
      streak = 0
    }
  }

  return output
}

module.exports = {
  balance
}