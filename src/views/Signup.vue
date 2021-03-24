<template>
  <div>
    <div>Username</div>
    <input
      class="inp-form"
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
    <div class="password">
      <input
        v-model="password"
        ref="passwordElement"
        :type="show === true ? 'text' : 'password'"
        @keyup="passwordHandler($event, 1)"
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
    <div>Password Confirm</div>
    <div class="password">
      <input
        v-model="passwordConf"
        ref="passwordConfElement"
        :type="show2 === true ? 'text' : 'password'"
        @keyup="passwordHandler($event, 2)"
      />
      <img
        v-if="passwordConf && password"
        src="@/assets/eye_icon.png"
        @click="show2 = !show2"
        alt=""
      />

    </div>
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
      show: false,
      show2: false,
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
.inp-form{
  outline: none;
  width: 14.5em;
  height: 20px;
  border: 1px solid rgb(223, 223, 223);
  padding: 3px;
  border-radius: 25px;
  margin: 10px 0px;}
</style>
