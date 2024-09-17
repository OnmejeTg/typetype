class Vehicle {
  drive(): void {
    console.log("Zooom Zooom!!!!");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Vroom!");
  }
}

const car = new Car();

car.drive();
car.honk();
