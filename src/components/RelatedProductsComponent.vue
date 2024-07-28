<template>
  <div class="container">
    <h2>You might like</h2>

    <div class="wrapper-arrivals">
      <SmallCardsComponent />
    </div>
  </div>
</template>

<script>
import SmallCardsComponent from './SmallCardsComponent.vue'
export default {
  name: 'ArrivalsComponent',
  components: {
    SmallCardsComponent
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
