import { Login } from '@/mockServer/server';
import { readonly } from 'vue';

interface State {
    id: number;
    name: string;
    username: string;
    token: string;
}

const state: State = {
  id: 0,
  name: '',
  username: '',
  token: '',
};

const mutations = {
  login(obj: any) {
    state.id = obj.id;
    state.name = obj.name;
    state.username = obj.username;
    state.token = obj.token;
  },
};

const actions = {
  async login(username: string, password: string) {
    console.log('sou o action, vamos logar!', username, password);
    const res = await Login(username, password);
    if (res.status === 'ok') {
      mutations.login(res.result);
    }
    return res;
  },
};

export default function useAuth() {
  return readonly({
    state,
    actions,
  });
}
