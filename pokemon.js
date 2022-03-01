// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.



//  class called "pokemon"
class pokemon {
    // constructor of class with attributes
    constructor(name, type, attack) {
      // assign parameters to class properties
      this.name = name;
      this.type = type;
      this.attack = attack;
    }
    
    // Method called "printAttackInConsl"
    printAttackInConsl() {
      // print properties values in console
      console.log(`${this.name} of type ${this.type}, used ${this.attack} attack.`);
    }
  }
  
  // create or Instantiate 2 new pokemon objects by passing parameter values
  const pokemonOne = new pokemon('Pikachu', 'Grass', 'Thunderbolt');
  const pokemonTwo = new pokemon('Eevee', 'Rock', 'Acid');
  
  // call printAttackInConsl method on 2 pokemon objects created above
  pokemonOne.printAttackInConsl();
  pokemonTwo.printAttackInConsl();
  
  // prints in console:
  // 'Pikachu of type Grass, used Thunderbolt attack.'
  // 'Eevee of type Rock, used Acid attack.'