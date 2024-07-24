<template>
  <HeaderComponentVue />
  <ProductDetailsComponentVue />
  <ProductReviewsComponentVue />
  <RelatedProductsComponentVue />
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue'
import ProductDetailsComponentVue from '@/components/ProductDetailsComponent.vue'
import ProductReviewsComponentVue from '@/components/ProductReviewsComponent.vue'
import RelatedProductsComponentVue from '@/components/RelatedProductsComponent.vue'
export default {
  components: {
    HeaderComponentVue,
    ProductDetailsComponentVue,
    ProductReviewsComponentVue,
    RelatedProductsComponentVue
  }
}
</script>

<style></style>
