interface Product {
  id: number;
  name: string;
  quantity: number;
}

const product1: Product = { id: 1, name: "Produto 1", quantity: 2 };

const product2: typeof product1 = { id: 2, name: "Produto 2", quantity: 3 };
