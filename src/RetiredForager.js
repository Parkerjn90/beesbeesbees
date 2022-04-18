var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  // this.food = getOld.food;
  this.treasureChest = [];
};

// var getOld = new ForagerBee();

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

// RetiredForagerBee.prototype.eat = getOld.eat;

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};