//bool
let success: boolean = false; 

// success = 'teste'

// numeros

let num = 10;
// let num: number = 10.50;
// let num: number = 0xFA;

// num = true;
// num = 'string'

// string
let _name = 'vini';
let name1: string = 'vini 2';

_name = `SON - ${name1}`;
console.log(_name)


// Array
let arrayString: string[] = ['a', 'b', 'c'];
let arrayString1: Array<string> = ['a', 'b', 'c'];

//enum

enum estado_civil { Solteiro = 'solteiro', Casado = 'casado', Divorciado = 'divorciado' };

let meu_estado_civil: estado_civil = estado_civil.Solteiro;

if (meu_estado_civil == estado_civil.Solteiro) {
   console.log(`Sou ${meu_estado_civil}`)
}