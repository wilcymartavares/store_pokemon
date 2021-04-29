const user = {
  id: 1,
  name: 'Fulano',
  username: 'asd',
  password: '123',
  status: 'ok',

};

export const Signup = async (name: string, username: string, password: string) => {
  user.name = name;
  user.username = username;
  user.password = password;

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
