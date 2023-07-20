const numbers = [4, 19, 26, 32, 43, 55, 67, 78, 81, 90]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

const rainbow = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']

for (let i = rainbow.length - 1; i >= 0; i--) {
  console.log(rainbow[i])
}
