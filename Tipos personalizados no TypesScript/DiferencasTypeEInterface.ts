// Interface x Type

interface IBaseProduct {
  price: number;
}

interface IProduct extends IBaseProduct {
  id: number;
  name: string;
}

interface IProduct {
  quantity: number;
}

type TBaseProduct = {
  price: number;
};

type TProduct = TBaseProduct & {
  id: number;
  name: string;
};

let iproduct: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 12 };

let product2: TProduct = { id: 2, name: "Produto 2", price: 600 };

type TypeString = string;
type TypeNumber = number;
