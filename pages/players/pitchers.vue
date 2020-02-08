<template>
  <div id="allPitchers" class="container">
    <div class="card box" v-bind:key="pitcher.id" v-for="pitcher in pitchers">
      <div class="card-image">
        <figure class="image is-2by3">
          <img :src="pitcher.profile.url" alt="That Player">
        </figure>
      </div>

      <div class="content">
        <p class="title is-3">{{pitcher.name}}</p>
        <div class="tags">
          <span class="tag is-success">{{capitalize(pitcher.startOrRelief)}}</span>
          <span class="tag is-info">Throws: {{pitcher.throws}}</span>
        </div>
      </div>
      
      <footer class="card-footer">
        <div class="card-footer-item">
        </div>
      </footer>

    </div>
  </div>
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
import allPitchersQuery from '~/apollo/queries/players/pitcher/pitchers'
export default {
  data() {
    return {
      pitchers: []
    }
  },
  apollo: {
    pitchers: {
      prefetch: true,
      query: allPitchersQuery
    }
  },
  methods: {
    capitalize: function(str) {
      if(typeof str === 'string') {
          return str.replace(/^\w/, c => c.toUpperCase());
      } else {
        return '';
      }
    }
  }
}
</script>