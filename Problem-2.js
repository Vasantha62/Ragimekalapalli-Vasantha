

function generateSeries(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 * i + 1);
  }
  return result;
}


console.log(generateSeries(1)); // [1]
console.log(generateSeries(4)); // [1, 3, 5, 7]
