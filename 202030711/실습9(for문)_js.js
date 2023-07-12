for (let i = 0; i < 10001; i += 13) {
  if (i % 13 === 0 && i % 2 == 1) {
    console.log(i);
  }
}

let num = Number(prompt("숫자를 입력하세요."));

console.log("num:", num);

for (let i = 0; i < num; i += 13) {
  if (i % 13 === 0 && i % 2 == 1) {
    console.log(i);
  }
}
