//Abstraction - Abstraction is the process of hiding the implementation details of a class or a method and providing a simplified interface for interacting with it.

abstract class Me {
  //define the abstract base class
  constructor(public name: string) {}

  abstract greeting(): string;

  abstract work(): string;
  //hides implementation details
  //abstract methods cannot be passed down as they have no body
}

//Subclass:
class RichardMena extends Me {
  constructor(name: string) {
    super(name);
  }

  greeting(): string {
    return `Hello, my name is ${this.name}`;
  }

  work(): string {
    return `${this.name} is a Road to Hire apprentice`;
  }
  //Subclass provides its own implementation for the methods.
}

// create an instance of RichardMena class
let richardMena = new RichardMena("Richard");
console.log(richardMena.greeting());
console.log(richardMena.work());

//Provides us the ability to use any class that extends the 'Me' in the same way regardless of implementation details
//Important because it allows developers to focus on the essential features of a class.
//Real World Example: React framework uses abstraction to give an organized way of building the UI and sperates the logic of components by abstracting the implementation details.
