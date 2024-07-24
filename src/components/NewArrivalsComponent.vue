<template>
  <div class="container">
    <h2>Recently added</h2>

    <div class="wrapper-arrivals">
      <div class="card small-card">
        <RouterLink :to="{ name: 'checkout', params: { id: '1234' } }">
          <div class="img-cover">
            <button>
              <PhHeart size="25" weight="fill" fill="#1C2837" />
            </button>
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
    </div>
  </div>
</template>

<script>
import { PhHeart } from '@phosphor-icons/vue'
export default {
  name: 'ArrivalsComponent',
  components: { PhHeart }
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
