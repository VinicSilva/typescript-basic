//bool
var success = false;
// success = 'teste'
// numeros
var num = 10;
// let num: number = 10.50;
// let num: number = 0xFA;
// num = true;
// num = 'string'
// string
var _name = 'vini';
var name1 = 'vini 2';
_name = "SON - " + name1;
console.log(_name);
// Array
var arrayString = ['a', 'b', 'c'];
var arrayString1 = ['a', 'b', 'c'];
//enum
var estado_civil;
(function (estado_civil) {
    estado_civil["Solteiro"] = "solteiro";
    estado_civil["Casado"] = "casado";
    estado_civil["Divorciado"] = "divorciado";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
if (meu_estado_civil == estado_civil.Solteiro) {
    console.log("Sou " + meu_estado_civil);
}
