var soma = function (x, y) {
    return x + y;
};
// void
var num = soma(2, 3);
var soma1 = function (x, y) { return x + y; };
var funcao = function (name) { return "Vinicius " + name; };
var funcaoDefaultParameters = function (first_name, last_name) {
    if (last_name === void 0) { last_name = 'Pereira'; }
};
funcaoDefaultParameters('Marcos');
var funcaoOptionalParameters = function (first_name, last_name) {
    console.log(last_name);
};
funcaoOptionalParameters('Vinicius');
