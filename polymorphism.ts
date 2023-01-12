//Polymorphism is a concept in object-oriented programming that refers to the ability of a single interface or method to be used to represent or operate on multiple types of objects.

class Shape {
  //base class
  area(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  //overides the area method
  constructor(public width: number, public height: number) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  //overides the area method
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return 3.14 * this.radius * this.radius;
  }
}

let shape: Shape = new Rectangle(5, 10);
console.log(shape.area());

shape = new Circle(5);
console.log(shape.area());

// This demonstrates polymorphism because the same method "area" is being used to perform different actions on different types of objects.
//Real World Example: Product categories each with their own properties and behaviours.
