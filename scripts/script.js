function Character(name, strength, health) {
  this.name = name;
  this.strengt = strength;
  this.health = health;
  this.attackBtn = document.querySelector(`#${this.name}-attack`);
  this.healthBtn = document.querySelector(`#${this.name}-make-health`);
  this.progress = document.querySelector(`.${this.name}-health span`);
  this.alive = document.querySelector(`#${this.name}-alive`);
}
Character.prototype.attack = function (opponent) {
  //  console.log(this); nartoo

  // console.log(opponent);sasakii

  console.log(opponent.health);
  if (opponent.health > 0) {
    opponent.health -= this.strengt;
    opponent.progress.style.width = `${opponent.health}%`;
  } else {
    opponent.attackBtn.remove();
    opponent.healthBtn.remove();
    opponent.alive.innerHTML = `${opponent.name} is died`;
  }
};
Character.prototype.status = function () {
  console.log("name" + this.name);
  console.log("strengt" + this.strengt);
  console.log("health" + this.health);
};
Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    this.progress.style.width = `${this.health}%`;
  }
  if (this.health > 100) {
    this.health = 100;
  }
};
let nartoo = new Character("nartoo", 10, 100);
let sasakii = new Character("sasakii", 5, 100);
/**
 * console.log(nartoo);
console.log(sasakii);
nartoo.makeHealth();
nartoo.status();

 */
nartoo.attackBtn.addEventListener("click", function () {
  nartoo.attack(sasakii);
  sasakii.status();
});
sasakii.attackBtn.addEventListener("click", function () {
  sasakii.attack(nartoo);
  nartoo.status();
});

nartoo.healthBtn.addEventListener("click", function () {
  nartoo.makeHealth();
});
sasakii.healthBtn.addEventListener("click", function () {
  sasakii.makeHealth();
});
