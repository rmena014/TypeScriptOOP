//Polymorphism is a concept in object-oriented programming that refers to the ability of a single interface or method to be used to represent or operate on multiple types of objects.

class Shape {
  //base class
  constructor(public name: string) {}

  area(): number {
    return 0;
  }

  displayName(): string {
    return `Shape name: ${this.name}`;
  }
}

class Rectangle extends Shape {
  constructor(name: string, public width: number, public height: number) {
    super(name);
  }
  //overides the area method

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(name: string, public radius: number) {
    super(name);
  }
  //overides the area method
  area(): number {
    return 3.14 * this.radius * this.radius;
  }
}

let shape: Shape = new Rectangle("Rectangle", 5, 10);
console.log(shape.displayName());
console.log(shape.area());

shape = new Circle("Circle", 5);
console.log(shape.displayName());
console.log(shape.area());

//Important it because allows for more flexible and dynamic code
// This demonstrates polymorphism because the same method "area" is being used to perform different actions on different types of objects.
//Real World Example: Product categories each with their own properties and behaviours.
