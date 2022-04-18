var Bee = function() {


  this.food = growUp.food;
  // this.eat = growUp.eat;

};

var growUp = new Grub();

Bee.prototype.age = 5;
Bee.prototype.color = 'yellow';
Bee.prototype.job = 'keep on growing';
Bee.prototype.eat = growUp.eat;
Bee.prototype.food = growUp.food;