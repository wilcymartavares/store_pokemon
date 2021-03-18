import { readonly } from 'vue';
import axios from 'axios';

interface Data {
  pokemons: [];
}
const data: Data = {
  pokemons: [],
};

axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
  data.pokemons = res.data.results;
  console.log('tste 0', res);
});

export default function usePokeDados() {
  console.log('datassss', data);
  return readonly({
    data,
  });
}
