<template>
  <div id="allHitters" class="container">
      
    <div class="card box" v-bind:key="hitter.id" v-for="hitter in hitters">
      <div class="card-image">
        <figure class="image is-2by3">
          <img :src="hitter.profile.url" alt="That Player">
        </figure>
      </div>
      <div class="content">
        <p class="title is-3">{{hitter.name}}</p>
        <div class="tags are-small">
          <span class="tag is-success">{{hitter.position}}</span>
          <span class="tag is-info">Hits: {{hitter.hits}}</span>
        </div>
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
          
        </div>
      </footer>
    </div>
  </div>

    <!-- <div id="allHitters" class="d-flex align-items-center">
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
    </div> -->
  <!-- </div> -->
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: top;
  background-color: lightgrey;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
}
.card {
  display: inline-block;
  width: 17rem;
  height: 32rem;
  margin: 5px;
}
p.title {
  margin-bottom: 4px;
}
</style>

<script>
import allHittersQuery from '~/apollo/queries/players/hitter/hitters'
export default {
  data() {
    return {
      hitters: []
    }
  },
  apollo: {
    hitters: {
      prefetch: true,
      query: allHittersQuery
    }
  },
  // asyncData() {
  //   return this.$axios.get(`http://localhost:4000/hitters`)
  //     .then(response => {
  //       return {hitters: response.data}
  //     })
  // },
  // computed: {
  //   aggHitters() {
  //     let guys = this.hitters
  //     guys = guys.filter(item => item.AB != 0)
  //     return _(guys)
  //       .groupBy('playerID')
  //       .map((hitter, id) => ({
  //         'playerID': id,
  //         'year': _.sumBy(hitter, 'yearID'),
  //         'AB': _.sumBy(hitter, 'AB'),
  //         'RBI': _.sumBy(hitter, 'RBI'),
  //         'HR': _.sumBy(hitter, 'HR'),
  //         'H': _.sumBy(hitter, 'H'),
  //       }))
  //     .value()
  //   }
  // }
}
</script>