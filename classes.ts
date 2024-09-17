class Vehicle {
  drive(): void {
    console.log("Zooom Zooom!!!!");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();
