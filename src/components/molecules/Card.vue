<template>
  <div class="home-card">
    <img :src="card.sprites.frontDefault" />
    <div>{{ card.id }}</div>
    <div>{{ card.name }}</div>
    <btn v-if="!isCart" @click="$emit('on-Buy', card)">buy</btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Btn from '../atoms/btn.vue';

export default defineComponent({
  components: { Btn },
  props: {
    card: { type: Object, required: true },
    isCart: { type: Boolean, default: false },
  },
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-card {
  border: 1px solid #e6e6e6;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  height: 220px;
  width: 150px;
  font-weight: bold;
}
img {
  width: 120px;
}
</style>
