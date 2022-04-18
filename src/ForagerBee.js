var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  // this.color = newJob.color;
  this.job = 'find pollen';
  // this.food = newJob.food;
  this.canFly = true;
  this.treasureChest = [];
};

// var newJob = new Bee();
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

// ForagerBee.prototype.eat = newJob.eat; -- don't need, already inherited

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};