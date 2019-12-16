function partial(fn) {
  const arg = Array.from(arguments).slice(1)
  return function() {
    return fn.apply(fn, [...arg, ...arguments])
  }
}

function addOne(t,n) {
  return t + n
}

console.log(partial(addOne, 1)(2))