const fibonacci = (n) => {
  if (n === 0) return []
  if (n === 1) return [1]
  if (n === 2) return [1,1]
  const fibo = [1,1]
  for (let index = 2; index < n; index++) {
    const sum = fibo[index - 1] + fibo[index - 2]
    fibo.push(sum)
  }
  return fibo
}

module.exports = fibonacci;