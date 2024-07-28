<template>
  <div class="card small-card">
    <RouterLink :to="{ name: 'checkout', params: { id: '1234' } }">
      <div class="img-cover">
        <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="" />
      </div>
      <h4>BeatsHeadset</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </RouterLink>
    <div class="cat">
      <button>add to cart</button>
      <span>HT 1500</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallScardsComponent'
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
