<template>
  <div>
    <div v-if="this.$auth.user">
      {{this.$auth.user.displayName}} -
      <button type="button" @click="this.$auth.logout">Log out</button>
    </div>
    <LoginForm v-else :errorMessage="errorMessage" @submit="login" />
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";

export default {

  props: {
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  methods: {
    login({ email, password }) {
      this.$auth.login(email, password).then(() => {
        if (!this.$auth.user) {
          this.errorMessage = "Authentication failed, please try again";
        }
      });
    }
  },
  created() {
    this.$auth.init();
  },
  components: { LoginForm }
};
</script>
