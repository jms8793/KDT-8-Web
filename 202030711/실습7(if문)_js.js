let sex = prompt("성별을 입력하세요.(남/여)");
let age = Number(prompt("나이를 입력하세요."));

console.log("sex:", sex);
console.log("age:", age);

if (sex == "남") {
  if (age >= 20) {
    console.log("성인 남성");
  } else if (age >= 17) {
    console.log("고등 남학생");
  } else if (age >= 14) {
    console.log("중등 남학생");
  } else if (age >= 8) {
    console.log("초등 남학생");
  } else if (age >= 0) {
    console.log("남유아");
  }
}

if (sex == "여") {
  if (age >= 20) {
    console.log("성인 여성");
  } else if (age >= 17) {
    console.log("고등 여학생");
  } else if (age >= 14) {
    console.log("중등 여학생");
  } else if (age >= 8) {
    console.log("초등 여학생");
  } else if (age >= 0) {
    console.log("여유아");
  }
}
