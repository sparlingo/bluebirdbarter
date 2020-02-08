<template>
  <b-navbar>
    
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/buefy.png">
      </b-navbar-item>
    </template>
    
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
            <button class="button is-primary"
              @click="loginModal()">
              <strong>Login</strong>
            </button>
        </div>
      </b-navbar-item>
    </template>

  </b-navbar>
</template>

<script>
const ModalForm = {
  props: ['email', 'password'],
  template: `
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Your email"
              required>
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required>
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">Close</button>
          <button class="button is-primary">Login</button>
        </footer>
      </div>
    </form>
  `
}
export default {
  methods: {
    loginModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalForm,
        hasModalCard: true,
        customClass: '',
        trapFocus: true
      })
    }
  }  
}

</script>