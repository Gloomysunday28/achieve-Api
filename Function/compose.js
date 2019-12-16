const change = (fn, result) => {
  return fn.call(fn, result)
}

function compose() {
  const arg = [...arguments]
  let length = arg.length - 1
  return function() {
    let result = arg[length].apply(arg[length], arguments)

    while(length--) {
      result = change(arg[length], result)
    }

    return result
  }
}

const a = (t) => {
  return t
}

const b = (t) => {
  return 2 + t
}

const c = (t) => {
  return t
}

console.log(compose(a, b, c)(3))