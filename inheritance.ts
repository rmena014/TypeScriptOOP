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
  // constructor method
  constructor(name: string) {
    super(name, "Dog");
  }

  // method to make the dog bark
  bark(): string {
    return "Woof, woof!";
  }
}
