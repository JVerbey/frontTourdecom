<template>
  <article>
    <h1>{{$t('home.title')}}</h1>
    <div>
      <p>Désolé mais nous effectuons actuellement des travaux de maintenance. Nous serons de retour en ligne sous peu!</p>
      <p>&mdash; La tour de commandement</p>
    </div>
  </article>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
  body, html {
    height: 100%;
    /* The image used */
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
    ),url("../assets/images/bg.jpg");

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }
  body {
    text-align: center;
    padding: 150px;
    font: 20px Helvetica, sans-serif;
  }
  h1 { font-size: 50px; color: #FFFFFF;}
  article {
    display: block;
    text-align: left;
    width: 650px;
    margin: 0 auto;
    padding:10px;
    color: #FFFFFF;
  }
  a { color: #dc8100; text-decoration: none; }
  a:hover { color: #FFF; text-decoration: none; }
</style>
