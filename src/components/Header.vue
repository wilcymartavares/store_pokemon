<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mycards">My Cards</router-link> |
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link> |
    </span>
    <span v-else>
      <span style="cursor: pointer" @click="logoutHandler"
        ><strong>Logout</strong> |
      </span>
    </span>
    <router-link to="checkout">
      <span v-if="isLoggedIn">
        <img src="@/assets/pngwing.com.png" alt="" />
        <label for="">{{ cartCount }}</label>
      </span>
    </router-link>
  </div>
  <div v-if="isLoggedIn" class="welcome">
    Bem vindo <strong>{{ name }}</strong
    >, seu saldo é de <strong>{{ balance }}</strong>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import { computed, defineComponent } from 'vue';
import useMe from '@/modules/me';

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const me = useMe();

    const isLoggedIn = computed(() => auth.state.token);
    const name = computed(() => auth.state.name);
    const logoutHandler = () => auth.actions.logout();
    const balance = computed(() => me.state.balance);
    const cartCount = computed(() => me.state.cart.length);

    return {
      isLoggedIn,
      name,
      logoutHandler,
      balance,
      cartCount,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: 30px;
  margin-bottom: -9px;
}
.welcome {
  margin-bottom: 20px;
}
</style>
