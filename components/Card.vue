<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title subtitle is-centered has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
         <div class="content has-text-centered">
          <figure class="image is-square">
            <img :src="'~/assets/' + image" alt="image" />
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
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    imageUrl(image) {
      return '~/assets/' + image
    }
  }
}
</script>
