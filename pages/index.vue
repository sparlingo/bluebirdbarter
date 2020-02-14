<template>
  <section class="hero is-fullheight is-info">
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
        <SuperSecretDiv v-if="isLoggedIn" />
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
import netlifyIdentity from "netlify-identity-widget";
import { mapActions, mapState } from "vuex";
import SuperSecretDiv from '~/components/SuperSecret'

netlifyIdentity.init();

export default {
  name: 'HomePage',
  components: {
    SuperSecretDiv
  },
  computed: mapState({
    isLoggedIn: state => state.user.currentUser
  }),
  methods: {
    ...mapActions({
      setUser: 'user/setUser'
    }),
    circumvent() {
      window.localStorage.setItem('user', true);
      location.reload(true);
    },
    triggerNetlifyIdentityAction(action) {
      if (action == "login" || action == "signup") {
        netlifyIdentity.open(action);
        netlifyIdentity.on(action, user => {
          this.setUser(user);
          netlifyIdentity.close();
        });
      } else if (action == "logout") {
        this.setUser(null);
        netlifyIdentity.logout();
        this.$router.push('/');
      }
    }
  }
}
</script>
