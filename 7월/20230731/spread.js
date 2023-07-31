//spread 연산자
const a = [1, 2, 3];
const b = [4, 5];
const concat = a.concat(b);
console.log(concat);
const spread = [...b, ...a];
console.log(spread);
const person = {
  name: "minsang",
  age: 20,
  gender: "M",
};
console.log({ ...person });
const c = "hello";
console.log([...c]);

function get(a, ...rest) {
  console.log(rest);
}
// class

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메소드
  mew() {
    console.log("야옹ㅎㅎ");
  }
  eat() {
    console.log("먹이를 먹습니다.");
  }
}

const cat1 = new Cat("나비", 1);
const cat2 = new Cat("산쵸", 2);

console.log(cat1);
cat1.mew();
cat1.eat();
