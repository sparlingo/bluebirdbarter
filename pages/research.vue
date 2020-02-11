<template>
  <section class="section">
    <h2 class="title">Research</h2>
    <div class="columns is-mobile container">

      <card
        title="The Blue Jays"
        icon="github-circle"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Sabermetrics"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          What the hell is Sabermetrics?
        </b> 
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  }
}
</script>