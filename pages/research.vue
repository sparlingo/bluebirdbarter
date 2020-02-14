<template>
  <section class="section">
    <h2 class="title">Research</h2>
    <div class="columns is-mobile container">
      <card title="The Blue Jays" icon="github-circle" noIcon>
        <b class="has-text-grey">
          Some interesting data about the franchise
        </b>
      </card>

      <card title="Sabermetrics" icon="cellphone-link">
        <b class="has-text-grey">
          What the hell is Sabermetrics?
        </b> 
      </card>

      <card title="Modern" icon="alert-decagram">
        Something something something
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
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