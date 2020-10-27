interface IAnimal {
  name: string;
  color: string;
  // correr();
  // andar();
  // comer();
}

class Animal implements IAnimal {
  private atributo;
  protected atributo1 = 'valor1';

  constructor(public name: string, public color: string) {}

  private correr() {}

  andar() {}

  comer() {
    this.atributo = 'valor';
    console.log('comer do animal');
  }
}

class Coelho extends Animal {
  tamanhoOrelha: number;

  comer() {
    console.log(this.atributo1);
    // super.correr();
    super.comer();
    console.log('comer do coelho');
  }
}

let coelho: Coelho = new Coelho('meu coelho', 'preto');

console.log(coelho.name);
console.log(coelho.color);

coelho.andar();
// coelho.correr();
coelho.comer();