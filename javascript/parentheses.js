const balance = (s) => {
  let open = []
  let output = ''
  for (let i=0;i<s.length;i++) {
    let l = s[i]
    if (l === '(') {
      if (s.substr(i, s.length).indexOf(')') > 0) {
        open.push('(')
        output += '('
      }
    } else if (l === ')') {
      if (open.length > 0) {
        open.pop()
        output += ')'
      }
      
    } else {
      output += l
    }
  }

  // clear extraneous left parens
  while (countOcc(output, '(') > countOcc(output, ')')) {
    const findLeft = output.indexOf('((')
    output = output.substr(0, findLeft) + output.substr(findLeft + 1, output.length)
  }

  return output
}

const countOcc = (str, s) => {
  return str.split(s).length - 1
}

module.exports = {
  balance
}