<template>
  <div>
    <div>Username</div>
    <input
      v-model="username"
      ref="usernameElement"
      type="text"
      @keyup="usernameHandler"
    />
    <br />
    <br />
    <div>Password</div>
    <input
      v-model="password"
      ref="passwordElement"
      type="password"
      @keyup="passwordHandler"
    />
    <br />
    <br />
    <div>
      <button @click="login">Login</button>
    </div>
    <br />
    <div>
      Não tem conta? <router-link to="/signup">Cadastre-se aqui</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';

export default defineComponent({
  components: {},

  setup() {
    const usernameElement = ref();
    const passwordElement = ref();
    const state = reactive({
      username: '',
      password: '',
    });

    const login = () => {
      console.log('vamos fazer o login', state.username, state.password);
    };

    const usernameHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && state.username) {
        console.log('apertou enter, vai pro password', passwordElement.value);
        passwordElement.value.focus();
      }
    };

    const passwordHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && state.username && state.password) {
        login();
      }
    };

    return {
      ...toRefs(state),
      login,
      usernameHandler,
      passwordHandler,
      usernameElement,
      passwordElement,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
