const soma = function (x: number, y: number): number {
  return x + y;
};

// void
let num: number = soma(2, 3);

const soma1 = (x: number, y: number): number => x + y;

let funcao = (name: string) => `Vinicius ${name}`;

let funcaoDefaultParameters = (first_name, last_name = 'Pereira') => {

};

funcaoDefaultParameters('Marcos');

let funcaoOptionalParameters = (first_name: string, last_name?: string) => {
  console.log(last_name);
};

funcaoOptionalParameters('Vinicius');