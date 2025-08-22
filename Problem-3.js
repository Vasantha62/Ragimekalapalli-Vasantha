


function generateCustomSeries(n) {
  let result = [];
  let count = Math.ceil(n / 2); 
  for (let i = 0; i < count; i++) {
    result.push(2 * i + 1);
  }
  return result;
}


console.log(generateCustomSeries(1)); 
console.log(generateCustomSeries(2)); 
console.log(generateCustomSeries(3)); 
console.log(generateCustomSeries(6)); 
