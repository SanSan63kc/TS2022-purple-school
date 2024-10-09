"use strict";
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
let vehicle = kmToMiles(new Vehicle());
let lcv = kmToMiles(new LCV());
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
