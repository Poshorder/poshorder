<template>
    <BannerComponentVue />
    <TopCategoriesComponent />

<div class="container">
  <h2>Recently added</h2>
 <div class="wrapper">
  <div class="card small-card" v-for="product in newArrivals" :key="product.id">
  <RouterLink v-if="typeof product.id !== 'undefined'" v-bind:to="{ name: 'checkout', params: { id: product.id} }">
    <div class="img-cover">
      <img :src="product.url" />
    </div>
    <h4>{{ product.name }}</h4>
    <p>{{ product.descriptions }}</p>
  </RouterLink>
  <div class="cat">
    <button>add to cart</button>
    <span>$ {{ product.price }}</span>
  </div>
</div>

 </div>
</div>
    
</template>

<script>
import BannerComponentVue from '../components/BannerComponent.vue'
import TopCategoriesComponent from '../components/TopCategoriesComponent.vue'

import { onMounted, ref } from "vue"
import { getData } from "../composables/index"
export default {
  components: {
    BannerComponentVue,
    TopCategoriesComponent
  },
  setup() {

    const newArrivals = ref('[]')

    onMounted(async () => {
  try {
    const data = await getData();
    const filteredNewArrivals = data.filter(d => d.isNew);
   // console.log('Filtered New Arrivals:', filteredNewArrivals); // Log data
    newArrivals.value = filteredNewArrivals;
  } catch (error) {
    console.error('Error:', error);
    // Handle the error
  }
});

    return {

      newArrivals
    }
  }
}
</script>

<style></style>
