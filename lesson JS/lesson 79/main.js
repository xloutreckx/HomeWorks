
let age = '33';

switch (+age) {
  case 15:
  case 16:
  case 17:
    console.log('Вам еще нет 18');
    break;

  case 18:
  case 33:
    console.log('Вы совершеннолетний');
    break;

  default:
    console.log('Banana')
}

// if (age >= 18) {
//   console.log('Вы совершеннолетний')
// } else {
//   console.log('Вам еще нет 18')
// }

// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')