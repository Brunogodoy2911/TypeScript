interface Product {
  id: number;
  name: string;
}

function newProduct(product: Product) {}

newProduct({ id: 1, name: "Produto X" });
