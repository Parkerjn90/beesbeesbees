var ForagerBee = function() {
  this.age = 10;
  this.color = newJob.color;
  this.job = 'find pollen';
  this.food = newJob.food;
  this.canFly = true;
  this.treasureChest = [];
};

var newJob = new Bee();

ForagerBee.prototype.eat = newJob.eat;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};