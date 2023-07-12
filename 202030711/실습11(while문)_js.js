let sum2 = 0;
let sum3 = 0;
let sum6 = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
  if (i % 3 === 0) {
    sum3 += i;
  }
  if (i % 6 === 0) {
    sum6 += i;
  }
}

console.log("2의 배수 합:", sum2);
console.log("3의 배수 합:", sum3);
console.log("6의 배수 합:", sum6);
console.log("2또는 3의 배수 총합:", sum2 + sum3 - sum6);

let sum_2 = 0;
let sum_3 = 0;
let sum_6 = 0;

let num = 0;
while (num < 100) {
  if (num % 2 === 0) {
    sum_2 += num;
  }
  if (num % 3 === 0) {
    sum_3 += num;
  }
  if (num % 6 === 0) {
    sum_6 += num;
  }
  num += 1;
}

console.log(sum_2 + sum_3 - sum_6);
