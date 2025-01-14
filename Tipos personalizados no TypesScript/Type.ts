type Product = {
  id: number;
  name: string;
};

function newProduct(product: Product) {}

newProduct({ id: 1, name: "Camiseta" });

type SelectResponse = Product[] | null;

function selectedProducts(): SelectResponse {
  return null;
}
