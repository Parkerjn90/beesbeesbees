var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  // this.color = newJob.color;
  // this.food = newJob.food;
  this.honeyPot = 0;
};

// var newJob = new Bee();
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype.eat = newJob.eat; -- don't need, method is inherited

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot > 0) {
    this.honeyPot--;
  }
};