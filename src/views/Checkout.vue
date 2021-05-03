<template>
  <div>
    <div class="home-card-container flex">
      <div v-for="card in cart" :key="card.url">
        <card :card="card" isCart="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from '@/components/molecules/Card.vue';
import useMe from '@/modules/me';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  components: { Card },

  setup() {
    const me = useMe();

    const cart = computed(() => me.state.cart);
    return {
      cart,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
