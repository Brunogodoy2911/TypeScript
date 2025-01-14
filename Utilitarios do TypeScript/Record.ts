// Cria um objeto onde todas as chaves são string e os valores são números.

const scores: Record<string, number> = {
  Bruno: 10,
  Rodrigo: 12,
};

// Limitar valores.

type Profile = "admin" | "user" | "guest";

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
};

// Objetos personalizados
interface User {
  name: string;
  email: string;
}

const users: Record<string, User> = {
  1: {
    name: "Bruno",
    email: "bruno@gmail.com",
  },

  2: {
    name: "Rodrigo",
    email: "rodrigo@gmail.com",
  },
};
