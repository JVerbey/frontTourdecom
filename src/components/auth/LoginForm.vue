<template>
<form @submit.prevent="submit()">
  <input type="email" v-model="email" />
  <input type="password" v-model="password" />
  <button type="submit">Log in</button>
  <p v-if="errorMessage" class="error">{{this.errorMessage}}</p>
</form>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style scoped>
  .error { color: tomato; }
</style>
