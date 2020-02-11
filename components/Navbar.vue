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
          <nuxt-link class="navbar-item" to="/register">Register</nuxt-link>
        </div>
      </b-navbar-item>
    </template>

  </b-navbar>
</template>

<script>

export default {
  
}

</script>