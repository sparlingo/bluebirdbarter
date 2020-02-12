<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-head">
      <div class="container">
        <h1 class="title">
          Blue Bird Barter
        </h1>
        <h2 class="subtitle">
          A baseball trading game for nerds
        </h2>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <SuperSecretDiv v-if="$auth.loggedIn" />
        <a @click="$auth.loginWith('auth0')"><button>Sign In</button></a>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1.title {
  padding-top: 30px;
}
</style>

<script>
import SuperSecretDiv from '~/components/SuperSecret'

export default {
  name: 'HomePage',
  components: {
    SuperSecretDiv
  }
}
</script>
