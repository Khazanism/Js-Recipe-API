//front 24 sat
//session 24// prototype = object [parent]
// root object
// ay 7 aga in js wartha mn el root object

/*
function Car(name) {
  this.name = name;
  this.printData = function () {
    console.log("this is Car");
  };
}

Car.prototype.printData = function name(params) {
  
}

let byd = new Car("byd");
console.log(byd);
let hundy = new Car("hundy");
console.log(hundy);

*/

/*
// bank

// task is to transfer from function => Class ////// constructor and add balance 

function Bank(balance) {
  this.balance = balance;

  this.setBalance = function (v1) {
    this.balance = v1;
  };

  this.getBalance = function () {
    console.log("Real Balance", this.balance);
  };

  // deposit

  this.deposit = function (v1) {
    if (v1 <= 0 || typeof v1 != "number") {
      console.log(" value must be positive number");
    } else {
      let newBalance = this.balance + v1;
      this.setBalance(newBalance);
      // console.log("new balance", newBalance); // 5200
    }
  };

  // withdraw

  this.withdraw = function (v1) {
    let newBalance = this.balance - v1;

    if (newBalance < 0) {
      console.log("not enoupth monewy");
    } else {
      this.setBalance(newBalance);
    }
    // this.setBalance(newBalance);
    // console.log("new balance", newBalance); // 5200
  };
}

let b = new Bank(0);
b.setBalance(1000);
b.deposit(200);

b.withdraw(800);
b.withdraw(100);
// console.log();
b.getBalance();
*/

function Character(name, strength, hitpoints) {
  this.name = name;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

Character.prototype.status = function () {
  console.log(
    `Name: ${this.name} -- Strength: ${this.strength} -- Hitpoints: ${this.hitpoints}`
  );
};

Character.prototype.attack = function (opponunt) {
  if (opponunt.hitpoints > 0) {
    // console.log(opponunt);
    opponunt.hitpoints -= this.strength;
    console.log(`${this.name} attacked ${opponunt.name}`);
  } else {
    console.log(`${this.name} is win`);
    console.log(`${opponunt.name} is lose`);
  }
};

// ahmed
let ahmed = new Character("ahmed", 10, 100);

// Mohamed
let mohamed = new Character("Mohamed", 10, 100);

ahmed.attack(mohamed);
mohamed.attack(ahmed);
mohamed.attack(ahmed);

// + healing  convert to class
