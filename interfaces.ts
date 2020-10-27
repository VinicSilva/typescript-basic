interface ObjectValue {
  category: string;
  product?: string;
}

/* function show({ category, product }: { category: string, product: string }) {
  console.log(category);
  console.log(product);
}; */

function show({ category, product }: ObjectValue) {
  console.log(category);
  console.log(product);
};

show({ category: 'categoria' }); 

let obj: ObjectValue = { category: 'categoria 1', product: 'produto 1' };

class Product implements ObjectValue {
  category: string;
}

let product = new Product();
product.category = 'categoria produtos';

console.log(product.category);
// console.log(product.product);