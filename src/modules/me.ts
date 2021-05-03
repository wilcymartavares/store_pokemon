import { reactive, readonly } from 'vue';
import { getMe } from '@/mockServer/server';
import { Card } from './pokeDados';

interface State {
    list: Card[];
    cart: Card[];
    balance: number;
}
// ------state
const state: State = reactive({
  list: [],
  cart: [],
  balance: 0,
});

// ------mutations
const mutations = {
  setBalance(newBalance: number) {
    state.balance = newBalance;
  },
  addCardToCart(card: Card) {
    state.cart.push(card);
  },
};

// ------actions
const actions = {
  async getMe() {
    // vamos buscar no srvidor os dados atualizados:
    const res = await getMe();
    if (res.status === 'ok') {
      mutations.setBalance(res.result.balance);
      return true;
    }
    return false;
  },
};
export default function useMe() {
  return readonly({
    state,
    actions,
    mutations,
  });
}
