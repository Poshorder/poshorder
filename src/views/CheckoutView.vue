<template>
  <ProductDetailsComponentVue />
  <ProductReviewsComponentVue />
  <RelatedProductsComponentVue />
</template>

<script>

import ProductDetailsComponentVue from '@/components/ProductDetailsComponent.vue'
import ProductReviewsComponentVue from '@/components/ProductReviewsComponent.vue'
import RelatedProductsComponentVue from '@/components/RelatedProductsComponent.vue'
export default {
  components: {
    ProductDetailsComponentVue,
    ProductReviewsComponentVue,
    RelatedProductsComponentVue
  }
}
</script>

<style></style>
