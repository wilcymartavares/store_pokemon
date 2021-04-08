const user = {
  id: 1,
  name: 'Fulano',
  username: 'asd',
  password: '123',
  status: 'ok',

};

export const Login = async (username: string, password: string) => {
  if (username !== user.username) {
    return { status: 'wrong_user' };
  }
  if (password !== user.password) {
    return { status: 'wrong_password' };
  }
  return {
    status: 'ok',
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: 'O Token',
    },
  };
};
