<template>
  <div class="home">
    <div v-for="(poke, index) in listData" :key="poke.url">
      <h1>{{index}} - {{poke.name}}</h1>
    </div>
    <div>{{listData}}</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import usePokeDados from '@/modules/pokeDados';
// import axios from 'axios';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  setup() {
    const pokeDados = usePokeDados();
    console.log('dentro de home', pokeDados);
    // const data = reactive({
    //   pokemons: [],
    // });
    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
    //   console.log(res);
    //   data.pokemons = res.data.results;
    // });
    const listData = computed(() => pokeDados.data.pokemons);
    console.log('testando', listData);
    return { listData };
  },
  // name: 'Home',
  // components: {
  //   HelloWorld,
  // },
});
</script>
