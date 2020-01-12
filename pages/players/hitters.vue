<template>
  <div class="container">
    <h1 class="title">Hitters</h1>

    <div id="allHitters" class="d-flex align-items-center">
      <div class="columns">
        <div class="is-one-third" v-bind:key="aggHitter.playerID" v-for="aggHitter in aggHitters">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{aggHitter.playerID}}</p>
                <p class="subtitle is-6">@someLink</p>
              </div>
            </div>
            <div class="content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. This is the end of it
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  asyncData() {
    return this.$axios.get(`http://localhost:4000/hitters`)
      .then(response => {
        return {hitters: response.data}
      })
  },
  computed: {
    aggHitters() {
      let guys = this.hitters
      guys = guys.filter(item => item.AB != 0)
      return _(guys)
        .groupBy('playerID')
        .map((hitter, id) => ({
          'playerID': id,
          'year': _.sumBy(hitter, 'yearID'),
          'AB': _.sumBy(hitter, 'AB'),
          'RBI': _.sumBy(hitter, 'RBI'),
          'HR': _.sumBy(hitter, 'HR'),
          'H': _.sumBy(hitter, 'H'),
        }))
      .value()
    }
  }
}
</script>