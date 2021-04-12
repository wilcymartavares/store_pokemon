<template>
  <div class="home">
    <div v-for="(poke, index) in listData" :key="poke.url">
      <h1>{{ index }} - {{ poke.name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import usePokeDados from '@/modules/pokeDados';
import useAuth from '@/modules/auth';

export default defineComponent({
  setup() {
    // const auth = useAuth();
    const pokeDados = usePokeDados();
    console.log('dentro de home', pokeDados);
    const listData = computed(() => pokeDados.dados.pokemons);
    console.log('testando', listData);
    return { listData };
  },
});
</script>
