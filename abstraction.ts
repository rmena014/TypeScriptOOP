abstract class Me {
  //defined the abstract base class
  constructor(public name: string) {}

  abstract greeting(): string;

  abstract work(): string;
  //abstract method, must be implemented by subclasses
}

class RichardMena extends Me {
  constructor(name: string) {
    super(name);
  }

  greeting(): string {
    return `Hello, my name is ${this.name}`;
  }

  work(): string {
    return `${this.name} is a software developer`;
  }
  //Implemented the speak and work methods
}

// create an instance of RichardMena class
let richardMena = new RichardMena("Richard");
console.log(richardMena.greeting());
console.log(richardMena.work());
