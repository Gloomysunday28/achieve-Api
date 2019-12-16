function memorize(fn) {
  const cache = {}
  return function() {
    const key = Array.from(arguments).join('')
    return cache[key] || (cache[key] = fn.apply(fn, arguments))
  }
}

const b = function(b) {
  return b
}

const memorizeB = memorize(b)

console.log(memorizeB(3))
console.log(memorizeB(3))
console.log(memorizeB(3))
console.log(memorizeB(3))