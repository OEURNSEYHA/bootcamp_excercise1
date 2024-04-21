// Concept in inheritance

// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method shared by all Animal instances
    sayName() {
      console.log(`My name is ${this.name}`);
    }
  }
  
  // Child class inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call parent constructor
      this.breed = breed;
    }
  
    // Method unique to Dog instances
    bark() {
      console.log(`Woof! I'm a ${this.breed}`);
    }
  }
  
  // Create instances of Animal and Dog
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy", "Golden Retriever");
  
  // Test methods
  animal.sayName(); // Output: My name is Generic Animal
  dog.sayName();    // Output: My name is Buddy
  dog.bark();       // Output: Woof! I'm a Golden Retriever


// Encapsulation 

class Car {
    constructor(make, model, year) {
      this._make = make; // Using underscore convention to indicate a private property
      this._model = model;
      this._year = year;
      this._engineOn = false;
    }
  
    // Getter methods to access private properties
    get make() {
      return this._make;
    }
  
    get model() {
      return this._model;
    }
  
    get year() {
      return this._year;
    }
  
    // Method to start the car's engine
    startEngine() {
      this._engineOn = true;
      console.log("Engine started");
    }
  
    // Method to stop the car's engine
    stopEngine() {
      this._engineOn = false;
      console.log("Engine stopped");
    }
  
    // Method to check if the engine is on
    isEngineOn() {
      return this._engineOn;
    }
  }
  
  // Create an instance of Car
  const myCar = new Car("Toyota", "Camry", 2022);
  
  // Accessing properties using getter methods
  console.log(myCar.make); // Output: Toyota
  console.log(myCar.model); // Output: Camry
  console.log(myCar.year); // Output: 2022
  
  // Starting the engine
  myCar.startEngine(); // Output: Engine started
  console.log(myCar.isEngineOn()); // Output: true
  
  // Stopping the engine
  myCar.stopEngine(); // Output: Engine stopped
  console.log(myCar.isEngineOn()); // Output: false

// abstract

class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class Shape.");
      }
    }
  
    // Abstract method
    calculateArea() {
      throw new Error("Abstract method calculateArea() must be implemented.");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    // Override abstract method
    calculateArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Uncomment the following to see an error when trying to instantiate an abstract class
  // const shape = new Shape();
  
  const circle = new Circle(5);
  console.log("Area of circle:", circle.calculateArea()); // Output: Area of circle: 78.53981633974483


// polymorphism

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // Method shared by all Animal instances
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    // Override the speak method
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    // Override the speak method
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  // Create instances of Animal, Dog, and Cat
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy");
  const cat = new Cat("Whiskers");
  
  // Call the speak method on each object
  animal.speak(); // Output: Generic Animal makes a sound.
  dog.speak();    // Output: Buddy barks.
  cat.speak();    // Output: Whiskers meows.
  