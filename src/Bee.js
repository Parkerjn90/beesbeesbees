var Bee = function() {
  this.food = growUp.food;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

var growUp = new Grub();

Bee.prototype.job = 'keep on growing';
Bee.prototype.eat = growUp.eat;