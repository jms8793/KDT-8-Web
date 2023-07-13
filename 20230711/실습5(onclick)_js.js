let first = Number(prompt("첫 번째 숫자를 입력해주세요."));
let second = Number(prompt("두 번째 숫자를 입력해주세요."));

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

function devide(first, second) {
  return first / second;
}

function clickAdd() {
  alert(add(first, second));
}

function clickSub() {
  alert(sub(first, second));
}

function clickMul() {
  alert(mul(first, second));
}

function clickDevide() {
  alert(devide(first, second));
}
