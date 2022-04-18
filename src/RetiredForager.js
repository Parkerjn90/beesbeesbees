var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

var getOld = new ForagerBee();

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};