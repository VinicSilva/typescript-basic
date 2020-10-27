var Animal = /** @class */ (function () {
    // name: string;
    // color: string;
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        console.log('construct');
    }
    return Animal;
}());
var myAnimal = new Animal('Cachorro', 'branco');
console.log(myAnimal.name);
console.log(myAnimal.color);
