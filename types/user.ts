type User = {
  id: number;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

type UserVerify = Pick<User, 'email'>