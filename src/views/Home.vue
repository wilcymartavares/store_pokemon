<template>
  <div class="home">
    <input v-model="a" type="text">
    <div v-for="(poke, index) in data.pokemons" :key="poke.url">
      <h1>{{index}} - {{poke.name}}</h1>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import axios from 'axios';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  setup() {
    const a = ref();
    const data = reactive({
      pokemons: [],
    });
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then((res) => {
      console.log(res);
      data.pokemons = res.data.results;
    });

    return { a, data };
  },
  // name: 'Home',
  // components: {
  //   HelloWorld,
  // },
});
</script>
