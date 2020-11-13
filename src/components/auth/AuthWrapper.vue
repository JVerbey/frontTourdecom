<template>
  <div>
    <div v-if="this.$store.getters.isAuthenticated">
      <b-button  @click="logout">{{$t('common.logout')}}</b-button>
    </div>
    <LoginForm v-else/>
  </div>
</template>

<script>
import {AUTH_LOGOUT} from "@/store/actions/auth";
import LoginForm from "@/components/auth/LoginForm";

export default {
  name: "AuthWrapper",
  props: {
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT)
    }
  },
  components: { LoginForm }
};
</script>
