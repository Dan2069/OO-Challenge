class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

const myVehicle = new Vehicle ("Honda","Accord","2004");
console.log(myVehicle.honk);

class Car extends Vehicle {
    constructor(make,model,year) {
    super(make,model,year);
    this.numWheels = 4;
    }
}
const myCar = new Car ("Kia","Forte","2015");
console.log(myCar.numWheels);

class Motorcycle extends Car {
    constructor(make,model,year) {
        super(make,model,year);
        this.numWheels = 2;
    }

    revEngine () {
        return "VROOOM!!!";
    }
}

const myMotorcycle = new Motorcycle("Yamaha","YZ65","2021")
console.log(myMotorcycle.revEngine)
console.log(myMotorcycle.numWheels)

class Garage {
    constructor (Capacity) {
        this.Vehicles = [];
        this.Capacity = Capacity
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) { // If the input of new Vehicles doesn't exist in the Object.prototype.Vehicles,
          return "Only vehicles are allowed in here!"; // returns that it's not a vehicle and it doens't belong in the garage
        }
        if (this.vehicles.length >= this.capacity) { // If the instant's value is at or more than the capacity limity,
          return "Sorry, we're full."; // returns that "Sorry, we're full"
        }
        this.vehicles.push(newVehicle); // Add's the newVehicles to the empty/not full array of the Garage, which is the Vehicle's Array []
        return "Vehicle added!"; // returns that the input has be accepted and that it's been added into the garage
      }


}

// let garage = new Garage (2);
// garage.Vehicles;
// console.log(garage.Vehicles);
// garage.add(new Car("Hyundai", "Elantra", 2015))
// garage.Vehicles;
// garage.add("Taco");

// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// garage.vehicles;

// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));