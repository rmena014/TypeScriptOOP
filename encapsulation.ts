//Encapsulation is the practice of keeping the implementation details of a class hidden from the outside and only exposing a public interface.

class Person {
  //Two private fields to store data.
  private name: string;
  private age: number;

  // The constructor takes two parameters "name" and "age"
  // and assigns them to the private fields name and age respectively
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    // Returns the current value of the name field
    return this.name;
  }

  getAge(): number {
    // Returns the current value of the age field
    return this.age;
  }
  //Public interface are interacting with the data
}

// Create an instance of the class with initial values "Richard Mena" and 21
let person = new Person("Richard Mena", 21);

console.log(person.getName()); // Output: "Richard Mena"
console.log(person.getAge()); // Output: 21

//The class ensures that the data fields are only modified by the class, and not by other code.
//The class is easier to understand and maintain because it presents a single,consistent interface for interacting with it, rather than exposing all of its implementation details.
//Importance: Helps ensure integrity of the class.

//Real World implementation: Banking System - hides implementation details of financial details
