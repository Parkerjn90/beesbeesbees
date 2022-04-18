var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
  this.food = getOld.food;
  this.treasureChest = getOld.treasureChest = [];
};

var getOld = new ForagerBee();

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.eat = getOld.eat;

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};