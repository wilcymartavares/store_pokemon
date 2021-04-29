import { Login, Signup } from '@/mockServer/server';
import { reactive, readonly } from 'vue';

const STORAGE_KEY = 'marketplace_pokemon';

interface State {
  id: number;
  name: string;
  username: string;
  token: string;
}

const state: State = reactive({
  id: 0,
  name: '',
  username: '',
  token: '',
});

const mutations = {
  login(obj: any) {
    state.id = obj.id;
    state.name = obj.name;
    state.username = obj.username;
    state.token = obj.token;
  },
};

const actions = {
  loadUserData() {
    const item = window.localStorage.getItem(STORAGE_KEY);
    if (item) {
      mutations.login(JSON.parse(item));
    }
  },
  logout() {
    window.localStorage.removeItem(STORAGE_KEY);
    mutations.login({});
  },
  async login(username: string, password: string) {
    console.log('sou o action, vamos logar!', username, password);
    const res = await Login(username, password);
    if (res.status === 'ok') {
      mutations.login(res.result);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(res.result));
    }
    return res;
  },

  async signup(name: string, username: string, password: string) {
    console.log('sou o action, vamos cadastrar!', name, username, password);
    const res = await Signup(name, username, password);
    if (res.status === 'ok') {
      mutations.login(res.result);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(res.result));
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
