// let myArray: Array<number> = [];

// function funcao(array: Array<number>) {

// }

function funcao<T>(param: T): T {
  return param;
}

let variable: number = funcao<number>(2);

class Lista<T> {
  items: Array<T> = [];

  add(item:T) {
    console.log(`add ${item}`);
  }

  remove(item:T) {
    console.log(`remove ${item}`);
  }
}

let lista = new Lista<number>();
lista.add(3);
lista.remove(2);
