// class EncapsulationExample {
//   private data: string;

//   constructor(data: string) {
//     this.data = data;
//   }

//   getData(): string {
//     return this.data;
//   }

//   setData(data: string): void {
//     this.data = data;
//   }
// }

// let example = new EncapsulationExample("Hello, World!");
// console.log(example.getData()); // Output: "Hello, World!"
// example.setData("Hello, TypeScript!");
// console.log(example.getData()); // Output: "Hello, TypeScript!"

class Person {
  private name: string;
  private age: number;

  // The constructor takes two parameters "name" and "age"
  // and assigns them to the private fields name and age respectively
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Returns the current value of the name field
  getName(): string { 
    return this.name;
  }

  // Returns the current value of the age field
  getAge(): number {
    return this.age;
  }
}

// Create an instance of the class with initial values "Richard Mena" and 21
let person = new Person("Richard Mena", 21);

console.log(person.getName()); // Output: "Richard Mena"
console.log(person.getAge()); // Output: 21
