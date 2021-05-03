<template>
  <div class="btn">
      <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},

  setup(props, { emit }) {
    // const clickHandler = () => {
    //   emit('click');
    // };
    return {
      // clickHandler,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{
    border-radius: 5px;
    background: #42b983;
    width: 150px;
    margin: 10px auto;
    padding: 5px 0;
    color: #fff;
    cursor: pointer;

}
</style>
