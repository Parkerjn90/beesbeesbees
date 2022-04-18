var Bee = function() {
  Grub.call(this); // use this so you don't reinstantiate Grub everytime you reinstantiate Bee, if we decide to change grub later on, Bee will change too
  // this.food = Grub.food;
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// var growUp = new Grub();

// set prototype first (linked object)
Bee.prototype = Object.create(Grub.prototype); // bee now references previously instantiated grub prototype

// now reset constructor to Bee (otherwise Grub.prototype will "destroy" or overwrite the Bee constructor)
Bee.prototype.constructor = Bee;


Bee.prototype.job = 'keep on growing';
// Bee.prototype.eat = Grub.eat; -- don't need, method is inherited