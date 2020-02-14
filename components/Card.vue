<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content" v-bind:class="{ 'noIcon': noIcon }">
        <div v-if="!noIcon" class="content has-text-centered">
          <span class="icon is-large has-text-primary">
            <fa :icon="icon" />
          </span>
        </div>
         <div v-else class="content has-text-centered">
          <figure class="image is-128x128">
            <img src="~/assets/jays.png">
          </figure>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    noIcon: {
      type: Boolean,
      required: false
    }
  }
}
</script>
