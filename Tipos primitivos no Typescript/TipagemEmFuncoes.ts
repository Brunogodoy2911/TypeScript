function sum(x: number, y: number): Number {
  const result = x + y; // const result: number
  console.log("Resultado = " + result);

  return result;
}

const result = sum(7, 3);

// const result = sum(7); =>  2 argumentos eram esperados, mas 1 foram obtidos. Não foi fornecido um argumento para 'y';

const showMessage = (name: string): string => {
  const message = "Olá" + name;

  // return 10; => O tipo 'number' não pode ser atribuído ao tipo 'string';

  return message;
};
