<template>
  <div>
    <Navbar />
    <section class="main-content columns is-1">
      <aside class="column is-1 section">
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
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-11">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  data () {
    return {
      items: [
        {
          // title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          // title: 'Research',
          icon: 'lightbulb',
          to: { name: 'research' }
        },
        {
          // title: 'Players',
          icon: 'baseball',
          to: { name: 'players' }
        }
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>
