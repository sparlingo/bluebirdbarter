<template>
  <div>
    <!-- <Navbar /> -->
    <section class="main-content columns is-1">
      <div class="column is-narrow section">
        <p class="menu-label is-hidden-touch">
          Menu
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-tooltip :label="item.title">
                <b-icon :icon="item.icon" /> 
              </b-tooltip>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="column is-11">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Research',
          icon: 'lightbulb',
          to: { name: 'research' }
        },
        {
          title: 'Players',
          icon: 'baseball',
          to: { name: 'players' }
        },
        {
          title: 'Register',
          icon: 'door',
          to: { name: 'register' }
        }
      ]
    }
  }
}
</script>
