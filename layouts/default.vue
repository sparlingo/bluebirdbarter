<template>
  <div>
    <Navbar />
    <section class="main-content columns is-1">
      <div class="column is-narrow section">
        <p class="menu-label is-hidden-touch">
          Menu
        </p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/" exact-active-class="is-active">
              <fa :icon="fas.faHome" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/research" exact-active-class="is-active">
              <fa :icon="faBook" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/players" exact-active-class="is-active">
              <fa :icon="fas.faBall" />
            </nuxt-link>
          </li>
          <li v-if="!isLoggedIn">
            <a v-on:click="triggerNetlifyIdentityAction('login')">
              <fa :icon="fas.faDoor" />
            </a>
          </li>
        </ul>
      </div>

      <div class="column is-12">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import { fas } from '@fortawesome/free-solid-svg-icons'
import netlifyIdentity from "netlify-identity-widget";
import { mapActions, mapState } from "vuex";

netlifyIdentity.init();

export default {
  computed: {
    // mapState({isLoggedIn: state => state.user.currentUser}),
    fas() {
      return fas
    }
  },
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
