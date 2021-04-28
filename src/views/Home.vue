<template>
    <div class= "home-card-container flex">
      <div v-for="poke in list" :key="poke.url" class=" home-card">
        <img :src="poke.sprites.frontDefault"/>
        <div>{{ poke.id }}</div>
        <div>{{ poke.name }}</div>
      </div>
    </div>
    <btn @click="loadMoreHandler">Carregar mais</btn>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import usePokeDados from '@/modules/pokeDados';
import useAuth from '@/modules/auth';
import btn from '@/components/atoms/btn.vue';

export default defineComponent({
  components: { btn },
  setup() {
    // const auth = useAuth();
    const pokeDados = usePokeDados();
    pokeDados.actions.loadCards();
    // pokeDados.actions.loadMore()
    const list = computed(() => pokeDados.state.list);

    const loadMoreHandler = () => {
      console.log('vamos carregar mais');
      pokeDados.actions.loadMore();
    };
    return {
      list,
      loadMoreHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.home-card{
  border: 1px solid #e6e6e6;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  height: 200px;
  width: 150px;
  font-weight: bold;
}
.home-card-container{
  border: 1px solid #5f5e5e;
  max-height: 73vh;
  border-radius: 10px;
  overflow-y: auto;
  max-width: 1052px;
  margin: auto;
  justify-content: center;

}
img{
  width: 120px;
}

</style>
