//starter code


function run() {
  var tigger = new Tiger("Tigger");
  tigger("tigger", "meat");

  var beer = new Bear("pooh")
  beer("pooh", "fish")
}

class Tiger extends Animal{

  constructor(name) {
   super(name, "meat");
  }
}





class Animal {
    
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
  }

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





class Bear extends Animal {

  constructor(name, favoriteFood) {
    super(name, "fish")
  }
}



run();