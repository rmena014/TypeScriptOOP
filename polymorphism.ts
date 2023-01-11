class Car {
  // constructor method
  constructor(public make: string, public model: string) {}

  // method 1: drive
  drive(): void {
    console.log(`The ${this.make} ${this.model} is driving.`);
  }

  // method 2: honk
  honk(): void {
    console.log(`The ${this.make} ${this.model} is honking.`);
  }
}

class SportsCar extends Car {
  // override the drive method
  drive(): void {
    console.log(`The sporty ${this.make} ${this.model} is driving fast!`);
  }
}

class Sedan extends Car {
  // override the honk method
  honk(): void {
    console.log(`The sedate ${this.make} ${this.model} is honking politely.`);
  }
}

// create an instance of each class
const mustang = new SportsCar("Ford", "Mustang");
const camry = new Sedan("Toyota", "Camry");

// call the methods on each instance
mustang.drive(); // "The sporty Ford Mustang is driving fast!"
mustang.honk(); // "The Ford Mustang is honking."

camry.drive(); // "The Toyota Camry is driving."
camry.honk(); // "The sedate Toyota Camry is honking politely."
