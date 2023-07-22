function nameUser(firstName) {
  return `Hello ${firstName}!`
}

const rezult = nameUser('Alex')
console.log(rezult)

// ===========================================

const numbers = [3, -13, 4, 11, 7, 123, 1, 50, 99]

function checkNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
}

checkNum(numbers)

// ===========================================

function calc(firstNumber, secondNumber, operator) {
  switch (operator) {
    case 'minus':
      console.log(firstNumber - secondNumber)
      break;

    case 'plus':
      console.log(firstNumber + secondNumber)
      break;

    case 'multiply':
      console.log(firstNumber * secondNumber)
      break;

    case 'divide':
      console.log(firstNumber / secondNumber)
      break;
  }
}

let result = calc(2, 3, 'minus')
result = calc(2, 3, 'plus')
result = calc(2, 3, 'multiply')
result = calc(2, 3, 'divide')



