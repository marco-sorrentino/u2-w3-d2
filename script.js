class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showAge() {
    if (p1.age > p2.age && p1.age > p3.age) {
      return p1.age;
    } else if (p2.age > p1.age && p2.age > p3.age) {
      return p2.age;
    } else {
      return p3.age;
    }
  }
}

let p1 = new Person("marco", 25);
let p2 = new Person("andrea", 34);
let p3 = new Person("filippo", 17);

console.log(p1.showAge());
