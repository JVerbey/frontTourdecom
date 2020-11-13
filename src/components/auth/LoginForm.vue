<template>
  <div class="login-form">
    <b-alert v-if="this.$store.getters.authStatus == 'error'" show variant="danger">{{$t('login.error')}}</b-alert>
    <b-spinner v-if="this.$store.getters.authStatus == 'loading'" variant="info" label="Spinning"></b-spinner>
    <form @submit.prevent="submit()">
      <b-form-group
          id="input-group-email"
          :label="$t('common.email')"
          label-for="email"
      >
        <b-form-input
            id="email"
            type="email"
            v-model="email"
            required
            placeholder="bbteam@contact.fr"
        ></b-form-input>
      </b-form-group>
      <b-form-group
          id="input-group-pwd"
          :label="$t('common.password')"
          label-for="password"
      >
        <b-form-input
            id="password"
            type="password"
            v-model="password"
            required
            autocomplete="on"
            placeholder="********"
        ></b-form-input>
      </b-form-group>
      <hr/>
      <b-button variant="success" type="submit">{{$t('login.login')}}</b-button>
    </form>
  </div>
</template>

<script>

import { AUTH_REQUEST} from "@/store/actions/auth";

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    submit() {
      const { email, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { email, password });
    }
  }
};
</script>

<style scoped>
  .error { color: tomato; }
</style>
