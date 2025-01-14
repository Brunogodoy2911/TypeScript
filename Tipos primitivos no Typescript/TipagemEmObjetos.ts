let user: { name: string; age: number; avatarUrl?: string } = {
  name: "Bruno",
  age: 18,
};

// user.password => A propriedade 'password' não existe no tipo '{ name: string; age: number; avatarUrl?: string | undefined; }'.

/*
function signIn(email: string, password: string){
    // Lógica de conectar o usuário na aplicação.
}

signIn("bruno@gmail.com", "123")

*/

function signIn({ email, password }: { email: string; password: string }) {
  // Lógica de conectar o usuário na aplicação.

  console.log("Usuário" + email + "conectado!");
}

signIn({ email: "bruno@gmail.com", password: "123" });
