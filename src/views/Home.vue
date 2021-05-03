<template>
  <div class="home-card-container flex">
    <div v-for="card in list" :key="card.url">
      <card-component :card= "card" @on-Buy="buyHandler(card)"/>
    </div>
  </div>
  <btn @click="loadMoreHandler">Carregar mais</btn>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import usePokeDados, { Card } from '@/modules/pokeDados';
import useMe from '@/modules/me';
import btn from '@/components/atoms/btn.vue';
import cardComponent from '@/components/molecules/Card.vue';

export default defineComponent({
  components: { btn, cardComponent },
  setup() {
    // const auth = useAuth();
    const pokeDados = usePokeDados();
    const me = useMe();
    pokeDados.actions.loadCards();
    // pokeDados.actions.loadMore()
    const list = pokeDados.getters.sortedList();

    const buyHandler = (card: Card) => {
      console.log('vamos comprar', card);
      me.mutations.addCardToCart(card);
    };

    const loadMoreHandler = () => {
      console.log('vamos carregar mais');
      pokeDados.actions.loadMore();
    };

    return {
      list,
      loadMoreHandler,
      buyHandler,
    };
  },
});
</script>

<style lang="scss" scoped>

.home-card-container {
  border: 1px solid #5f5e5e;
  max-height: 76vh;
  border-radius: 10px;
  overflow-y: auto;
  max-width: 1052px;
  margin: auto;
  justify-content: center;
}
</style>
