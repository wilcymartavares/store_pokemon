const user: {[key: string]: any} = {
  id: 1,
  name: 'Fulano',
  username: 'asd',
  password: '123',
  status: 'ok',
  token: '',
  balance: 0,
};

const data = window.localStorage.getItem('temp_marketplace_pokemon');
if (data) {
  const parsedData = JSON.parse(data);
  Object.keys(parsedData).forEach((k) => {
    user[k] = parsedData[k];
  });
}

export const Signup = async (name: string, username: string, password: string) => {
  user.name = name;
  user.username = username;
  user.password = password;
  user.token = 'O Token';
  user.balance = 1000;

  window.localStorage.setItem('temp_marketplace_pokemon', JSON.stringify(user));

  return {
    status: 'ok',
    result: {
      id: user.id,
      name: user.name,
      username: user.username,
      token: user.token,
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

export const getMe = async () => ({
  status: 'ok',
  result: {
    id: user.id,
    name: user.name,
    username: user.username,
    balance: user.balance,
  },
});
