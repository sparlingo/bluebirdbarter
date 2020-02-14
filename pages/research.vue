<template>
  <section class="section">
    <h2 class="title">Research</h2>
    <div class="columns is-mobile container">

      <card title="The Blue Jays" image="jays.png">
        <b class="has-text-grey">
          Interesting data about the Jays
        </b>
      </card>

      <card title="Sabermetrics" image="sabermetrics.png">
        <b class="has-text-grey">
          What the hell is Sabermetrics?
        </b> 
      </card>

      <card title="Baseball History" image="cobb.jpg">
        <b class="has-text-grey">
          My historical ponderings
        </b> 
      </card>

      <card title="Why We Love Baseball" image="beer.jpeg">
        <b class="has-text-grey">
          My historical ponderings
        </b> 
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