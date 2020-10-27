/* function show({ category, product }: { category: string, product: string }) {
  console.log(category);
  console.log(product);
}; */
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
;
show({ category: 'categoria' });
var obj = { category: 'categoria 1', product: 'produto 1' };
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.category = 'categoria produtos';
console.log(product.category);
// console.log(product.product); 
