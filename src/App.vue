<template>
  <div id="app">
    <div class="login-box">
      <AuthWrapper/>
    </div>
    <div id="page">
      <router-view/>
    </div>
  </div>
</template>

<script>

import AuthWrapper from "@/components/auth/AuthWrapper";


export default {

  name: 'App',
  metaInfo() {
    return {
      title: "La tour de commandement",
      meta: [
        { name: 'description', content:  ''},
        {name: 'robots', content: 'noindex'}
      ]
    }
  },
  props: {
  },
  components: {
    AuthWrapper
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/custom.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.login-box
{
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>
