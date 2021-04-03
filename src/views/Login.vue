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
    <div v-if="error.type === 'USERNAME'" class="signup-error">
      {{ error.msg }}
    </div>
    <div v-if="error.type === 'PASSWORD'" class="signup-error">
      {{ error.msg }}
    </div>
    <div style="margin-top: 20px;">
      <button @click="login">Login</button>
    </div>
    <div style="margin-top: 20px;">
      Não tem conta? <router-link to="/signup">Cadastre-se aqui</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import useAuth from '@/modules/auth';
import {
  defineComponent, reactive, ref, toRefs,
} from 'vue';

export default defineComponent({
  components: {},

  setup() {
    const auth = useAuth();
    const usernameElement = ref();
    const passwordElement = ref();
    const state = reactive({
      username: '',
      password: '',
      show: false,
      error: {
        type: '',
        msg: '',
      },
    });

    const login = () => {
      console.log('vamos fazer o login', state.username, state.password);
      if (state.username && state.password) {
        auth.actions.login(state.username, state.password).then((res) => {
          console.log('resposta do login', res);
          state.error.type = '';
          state.error.msg = '';
          if (res.status === 'wrong_user') {
            state.error.type = 'USERNAME';
            state.error.msg = 'Usuário não existe';
          }
          if (res.status === 'wrong_password') {
            state.error.type = 'PASSWORD';
            state.error.msg = 'Senha incorreta';
          }
        });
      }
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
S img {
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
.signup-error {
  color: red;
}
</style>
