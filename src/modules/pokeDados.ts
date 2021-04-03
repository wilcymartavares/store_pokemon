import { reactive, readonly } from 'vue';
import axios from 'axios';

interface Dados {
  pokemons: [];
}
const dados: Dados = reactive({
  pokemons: [],
});

axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
  console.log(res);
  dados.pokemons = res.data.results;
});

console.log('datassss', dados.pokemons);

export default function usePokeDados() {
  return readonly({
    dados,
  });
}
