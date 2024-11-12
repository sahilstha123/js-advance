// Polymorphism allows objects of different classes to be treated as objects of a common superclass, and it allows methods to be redefined (overridden) to perform different actions depending on the object type.
class personBio {
  constructor(obj) {
    (this.name = obj.name), (this.address = obj.address);
  }
  bio() {
    return `My name is ${this.name} and lives in ${this.address}`;
  }
}
class teacher extends personBio {
  constructor(obj) {
    super(obj);
    this.college = obj.college;
  }
  bio() {
    return `My name is ${this.name} and lives in ${this.address}. I teach in ${this.college}`;
  }
}
class student extends teacher {
  constructor(obj) {
    super(obj);
    this.career = obj.career;
  }
  bio() {
    return `My name is ${this.name} and lives in ${this.address}. I read in ${this.college} and currently ${this.career}`;
  }
}
const student1 = {
  name: "sahil",
  address: "itahari",
  college: "CSIT",
  career: "studying IT",
};
const s1Info = new student(student1);
console.log(s1Info.bio());
