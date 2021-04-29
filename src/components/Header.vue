<template>
  <div id="nav">
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link> |
    </span>
    <span v-else>
      Bem vindo: <strong>{{name}}</strong>    ||
    </span>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mycards">My Cards</router-link> |
    <span style="cursor: pointer" @click="logoutHandler" >Logout |</span>
    <span v-if="isLoggedIn">
      <img src="@/assets/pngwing.com.png" alt="">
    </span>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const isLoggedIn = computed(() => auth.state.token);
    const name = computed(() => auth.state.name);
    const logoutHandler = () => auth.actions.logout();

    return {
      isLoggedIn,
      name,
      logoutHandler,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  width: 30px;
  margin-bottom: -9px;
  display: inline-block;
  flex-direction: row;

}
</style>
