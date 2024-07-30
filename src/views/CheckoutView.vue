<template>
  <ProductDetailsComponentVue :itemDetails="itemDetails"/>
  <ProductReviewsComponentVue />
  <RelatedProductsComponentVue />
</template>

<script>
import ProductDetailsComponentVue from '@/components/ProductDetailsComponent.vue'
import ProductReviewsComponentVue from '@/components/ProductReviewsComponent.vue'
import RelatedProductsComponentVue from '@/components/RelatedProductsComponent.vue'
import { onMounted, ref } from 'vue';
import { getSingleItem } from "../composables/index"
export default {
 components:{
    ProductDetailsComponentVue,
    ProductReviewsComponentVue,
    RelatedProductsComponentVue
 },
 props: ['id'], 
 setup(props) {
  const itemId = ref(props.id)
  const itemDetails = ref({})
  onMounted(async() => {
   const results = await getSingleItem(itemId.value);
   itemDetails.value = results

   window.scrollTo({
    top:0,
    behavior: "smooth"
   });
  });
  return {
    itemDetails
  }
 }


}

</script>

<style></style>
