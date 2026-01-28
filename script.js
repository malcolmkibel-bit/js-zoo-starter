//starter code
var animalPopulation = 0;
var tigerPopulation = 0;
var bearPopulation = 0;
var unicornPopulation = 0;
var giraffePopulation = 0;
var beePopulation = 0;


function run() {
  console.log("-----------------BASE ANIMAL CLASSES-----------------")
  var tigger = new Tiger("tigger");
  tigger.eat("meat");
  console.log(" ")
  tigger.eat("carrot");
  console.log(" ")
  console.log(" ")

  var beer = new Bear("beer");
  beer.eat("fish");
  console.log(" ")
  beer.eat("brocolli");
  console.log(" ")
  console.log(" ")

  var corn = new Unicorn("corn");
  corn.eat("marshmellows");
  console.log(" ")
  corn.eat("chicken");
  console.log(" ")
  console.log(" ")

  var bigG = new Giraffe("bigG")
  bigG.eat("leaves");
  console.log(" ")
  bigG.eat("meat");
  console.log(" ")
  console.log(" ")

  var buzzBall = new Bee("buzzBall");
  buzzBall.eat("meat");
  console.log(" ")
  buzzBall.eat("honey");
  console.log(" ")
  console.log(" ")
  console.log(" ")
  console.log(" ")
  console.log("-----------------ZOOKEEPER-----------------")
  var animals = [tigger, beer, corn, bigG, buzzBall]

  var zoe = new Zookeeper("zoe")
  zoe.feed(animals, "pizza")
  console.log(" ")
  console.log(" ")
  console.log(" ")
  console.log(" ")
  console.log("-----------------POPULATION-----------------")
  console.log("There are " + Animal.getPopulation() + " Animals in the zoo!");
  console.log("There is " + Tiger.getPopulation() + " Tigers(s) in the zoo!");
  console.log("There is " + Bear.getPopulation() + " Bears(s) in the zoo!");
  console.log("There is " + Unicorn.getPopulation() + " Unicorns(s) in the zoo!");
  console.log("There is " + Giraffe.getPopulation() + " Giraffes(s) in the zoo!");
  console.log("There is " + Bee.getPopulation() + " Bee(s) in the zoo!");

}

/////////////////////////////////////////////////////////////////
class Animal {

  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPopulation++;
  }
  static getPopulation() {
    return animalPopulation;
  }


  eat(food) {
    console.log(this.name + " eats " + food)
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more " + food);
    } else {
      this.sleep();
    }

  }
}


///////////////////////////////////////////////////////////////////
class Tiger extends Animal {
  constructor(name) {
    super(name, "meat");
    this.name;
    tigerPopulation++;
  }
  static getPopulation() {
    return tigerPopulation;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours");
  }
  eat(food) {
    super.eat(food)
  }
}

class Bear extends Animal {
  constructor(name) {
    super(name, "fish");
    this.name;
    bearPopulation++
  }
  static getPopulation() {
    return bearPopulation;
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months");
  }
  eat(food) {
    super.eat(food)
  }
}

class Unicorn extends Animal {
  constructor(name) {
    super(name, "marshmellows");
    this.name = name;
    this.fav = "marshmellows"
    unicornPopulation++
  }
  static getPopulation() {
    return unicornPopulation;
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud")
  }
  eat(food) {
    if (food == this.fav) {
      super.eat(food)
    } else {
      this.sleep();
    }
  }
}

class Giraffe extends Animal {
  constructor(name) {
    super(name, "leaves");
    this.name = name;
    this.fav = "leaves";
    giraffePopulation++
  }
  static getPopulation() {
    return giraffePopulation;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours.")
  }
  eat(food) {
    if (food == this.fav) {
      console.log(this.name + " eats " + food);
      console.log("YUM!!! " + this.name + " wants more leaves!!!");
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + "will not eat " + food)
    }
  }
}

class Bee extends Animal {
  constructor(name) {
    super(name, "honey")
    this.name = name;
    this.fav = "honey";
    beePopulation++;
  }
  static getPopulation() {
    return beePopulation;
  }
  sleep() {
    console.log(this.name + " never sleeps");
  }
  eat(food) {
    if (food == this.fav) {
      console.log(this.name + " eats " + food);
      console.log("YUM!!! " + this.name + " wants more honey!!");
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
  }
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }

  feed(animals, food) {

    console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " Animals")

    for (let i = 0; i < animals.length; i++) {
      animals[i].eat(food);
    }
  }
}
run();

