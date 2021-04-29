import { reactive, readonly } from 'vue';
import axios from 'axios';

interface Sprite {
  frontDefault: string;
}

interface Card {
  id: number;
  name: string;
  sprites: Sprite;
  abilities?: [];
  base_experience?: [];
  forms?: [];
  game_indices?: [];
  height?: number;
  held_items?: [];
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: [];
  order?: number;
  past_types?: [];
  species?: {};
  stats?: [];
  types?: [];
  weight?: number;
}
interface State {
  list: Card[];
  nextUrl: string;
}
const state: State = reactive({
  list: [],
  nextUrl: '',
});

const mutations = {
  processCard(card: any) {
    // verificar se existe, buscando o index
    const idx = state.list.findIndex((x) => x.id === card.id);

    // criar um novo objeto
    const newCard: Card = {
      id: card.id,
      name: card.name,
      sprites: {
        frontDefault: card.sprites.front_default,
      },
    };

    // se existir -> edita;
    // se nao -----> adiciona;
    if (idx === -1) {
      state.list.push(newCard);
    } else {
      state.list[idx] = newCard;
    }
  },
  setNextUrl(url: string) {
    state.nextUrl = url;
  },
};

const actions = {
  async loadCards() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');

    actions.loadPokemon(res.data.results);
    mutations.setNextUrl(res.data.next);

    // res.data.results.map((element: any) => {
    //   axios.get(element.url).then((res) => {
    //     const card = res.data
    //     mutations.processCard(card)
    //   });
    // })
  },
  async loadPokemon(results: any) {
    results.forEach((element: any) => {
      axios.get(element.url).then((res) => {
        const card = res.data;
        mutations.processCard(card);
      });
    });
  },
  async loadMore() {
    axios.get(state.nextUrl).then((res) => {
      // const card = res.data
      mutations.setNextUrl(res.data.next);
      actions.loadPokemon(res.data.results);
    });
  },
};

export default function usePokeDados() {
  return readonly({
    state,
    actions,
  });
}
