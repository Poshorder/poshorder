<template>
  <div class="container">
    <h2>Recently added</h2>

    <div class="wrapper-arrivals">
      <SmallCardsComponentVue />
    </div>
  </div>
</template>

<script>
import SmallCardsComponentVue from './SmallCardsComponent.vue'

export default {
  name: 'ArrivalsComponent',
  components: {
    SmallCardsComponentVue
  }
}
</script>

<style>
.wrapper-arrivals {
  width: 100%;
  margin: 0.7em auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 17rem));
  gap: 0.7em;
}
</style>
