// let myArray: Array<number> = [];
// function funcao(array: Array<number>) {
// }
function funcao(param) {
    return param;
}
var variable = funcao(2);
var Lista = /** @class */ (function () {
    function Lista() {
        this.items = [];
    }
    Lista.prototype.add = function (item) {
        console.log("add " + item);
    };
    Lista.prototype.remove = function (item) {
        console.log("remove " + item);
    };
    return Lista;
}());
var lista = new Lista();
lista.add(3);
lista.remove(2);
