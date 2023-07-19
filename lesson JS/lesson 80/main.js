for (let i = 2; i <= 14; i = i + 2) {
  switch (i) {
    case 2:
    case 4:
      console.log(`пройдено ${i} цикла`);
      break;

    case 6:
    case 8:
    case 10:
    case 12:
      console.log(`пройдено ${i} циклов`);
      break;

      default:
        console.log('Циклы закончены')
  }
}

// // ============================================================


for (let i = 10; i >= 0; i = i - 1) {
  switch (i) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
      console.log(`осталось ${i} кругов`);
      break;

    case 4:
    case 3:
    case 2:
      console.log(`осталось ${i} круга`);
      break;

    case 1:
      console.log(`остался ${i} круг`);
      break;

      default:
        console.log('Финиш')
  }
}

// // ============================================================

let i = 0

while(i < 12) {
  i = i + 2
  console.log(i)
}

let it = 11

while(it > 1) {
  it = it - 1
  console.log(it)
}

