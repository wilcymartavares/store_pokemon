<template>
  <div>
    <div>Username</div>
    <input
      v-model="username"
      ref="usernameElement"
      type="text"
      @keyup="usernameHandler"
    />
    <div v-if="error.type === 'USERNAME'" class="signup-error">
      {{ error.msg }}
    </div>
    <br />
    <br />
    <div>Password</div>
    <input
      v-model="password"
      ref="passwordElement"
      type="password"
      @keyup="passwordHandler($event, 1)"
    />
    <br />
    <br />
    <div>Password Confirm</div>
    <input
      v-model="passwordConf"
      ref="passwordConfElement"
      type="password"
      @keyup="passwordHandler($event, 2)"
    />
    <div v-if="error.type === 'PASSWORD'" class="signup-error">
     {{ error.msg }}
    </div>
    <br />
    <br />
    <div>
      <button @click="signup">Signup</button>
    </div>
    <br />
    <div>Já tem conta? <router-link to="/login">Login</router-link></div>
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
    const passwordConfElement = ref();
    const state = reactive({
      username: '',
      password: '',
      passwordConf: '',
      error: { type: '', msg: '' },
    });

    const signup = () => {
      state.error.type = '';
      state.error.msg = '';

      if (!state.username) {
        state.error.type = 'USERNAME';
        state.error.msg = 'Bota teu nome aí cabra';
        return;
      }
      if (!state.password) {
        state.error.type = 'PASSWORD';
        state.error.msg = 'Esquecesse da senha abestado';
        return;
      }
      if (state.password !== state.passwordConf) {
        state.error.type = 'PASSWORD';
        state.error.msg = 'Olha direitinho aí e vê a diferença entre o password e a confirmação. Porque tão diferente rapaz!';
        return;
      }
      console.log('vamos fazer o signup', state.username, state.password);
    };

    const usernameHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && state.username) {
        console.log('apertou enter, vai pro password', passwordElement.value);
        passwordElement.value.focus();
      }
    };

    const passwordHandler = (event: KeyboardEvent, number: number) => {
      if (event.key !== 'Enter' || !state.username) {
        return;
      }
      if (number === 1 && state.password) {
        passwordConfElement.value.focus();
      } else if (number === 2 && state.password && state.passwordConf) {
        signup();
      }
    };

    return {
      ...toRefs(state),
      signup,
      usernameHandler,
      passwordHandler,
      usernameElement,
      passwordElement,
      passwordConfElement,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.signup-error {
  color: red;
}
</style>
