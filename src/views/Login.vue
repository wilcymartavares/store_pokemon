<template>
  <div>
    <div>Username</div>
    <input
      v-model="username"
      ref="usernameElement"
      type="text"
      @keyup="usernameHandler"
      class="inp-form"
    />
    <br />
    <br />
    <div>Password</div>
    <div class="password">
      <input
        v-model="password"
        ref="passwordElement"
        :type="show === true ? 'text' : 'password'"
        @keyup="passwordHandler"
      />
      <img
        v-if="password"
        src="@/assets/eye_icon.png"
        @click="show = !show"
        alt=""
      />
    </div>
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
      show: false,
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
img {
  width: 23px;
  height: 25px;
}
.password {
  display: flex;
  outline: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 12em;
  height: 20px;
  border: 1px solid rgb(223, 223, 223);
  padding: 3px;
  border-radius: 25px;
  margin: 10px 0px;
}
.password input {
  width: 80%;
  height: 100%;
  float: left;
  border: none;
  outline: none;
}
.inp-form {
  outline: none;
  width: 14.5em;
  height: 20px;
  border: 1px solid rgb(223, 223, 223);
  padding: 3px;
  border-radius: 25px;
  margin: 10px 0px;
}
</style>
