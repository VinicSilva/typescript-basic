class Animal {
  // name: string;
  // color: string;

  constructor(public name: string, public color: string) {
    console.log('construct');
  }
  
}

let myAnimal: Animal = new Animal('Cachorro', 'branco');
console.log(myAnimal.name);
console.log(myAnimal.color);