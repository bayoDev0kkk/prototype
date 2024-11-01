// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
}

Vehicle.prototype.drive = function (kmh) {
  console.log(`${this.driver} is driving at ${kmh} km/h.`);
};

Vehicle.prototype.stop = function () {
  console.log(`${this.driver} has stopped.`);
};

function Train(driver) {
  Vehicle.call(this, driver);
}

Train.prototype = Object.create(Vehicle.prototype);
Train.prototype.constructor = Train;

function Truck(driver) {
  Vehicle.call(this, driver);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.loadCargo = function (cargo) {
  console.log(`${this.driver} is loading cargo: ${cargo}.`);
};

Truck.prototype.unloadCargo = function () {
  console.log(`${this.driver} has unloaded the cargo.`);
};

module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
