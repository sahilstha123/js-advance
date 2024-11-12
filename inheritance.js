class brand {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  getInfo() {
    return `${this.brand} vehicle is manufacture in ${this.year}`;
  }
}

class bike extends brand {
  constructor(brand, year, type) {
    super(brand, year);
    this.type = type;
  }
  getInfo() {
    return `${this.brand} bike,type:${this.type} is manufacture in ${this.year}`;
  }
}

class car extends brand{
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
      }
      getInfo() {
        return `${this.brand} car,model:${this.model} is manufacture in ${this.year}`;
      }
}
const mybike = new bike("honda",2002,"moundtain")
const myCar = new car("Toyota",2021,"camry")
console.log(mybike.getInfo())
console.log(myCar.getInfo())
