// Inheritance is a mechanism in object-oriented programming where a class can inherit properties and methods from a parent class,
//  allowing for code reuse and a clear structure for organizing complex systems.

class Animals {
  // constructor method
  constructor(public name: string, public species: string) {}

  // method to return the name of the animal
  getName(): string {
    return this.name;
  }

  // method to return the species of the animal
  getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animals {
  //extends = inherting from the animals class
  // constructor method
  constructor(name: string) {
    super(name, "Dog");
    //calling/accessing the constructor method of parent class
  }

  // method to make the dog bark
  bark(): string {
    return "Woof, woof!";
  }
}

const fido = new Dog("Rocky");
console.log(fido.getName()); // Output: "Rocky"
console.log(fido.getSpecies()); // Output: "Dog"
console.log(fido.bark()); // Output: "Woof, woof!"

//Importance: Allows for reuse and clear structure
//Real World Example: Operating System design - An operating system performs multiple common functions (resource management, UI, etc) but different OS's can add their own properties and methods (Windows, MacOS, etc)
