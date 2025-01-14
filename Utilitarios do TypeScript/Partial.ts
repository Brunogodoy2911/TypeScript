interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = { id: 1, name: "Bruno", email: "bruno@gmail.com" };

const updatedUser: Partial<User> = { name: "Bruno Godoy" };
