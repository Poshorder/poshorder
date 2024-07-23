<template>
 <HeaderComponentVue/>
 <ProductDetailsComponentVue/>
 <ProductReviewsComponentVue/>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue';
import ProductDetailsComponentVue from '@/components/ProductDetailsComponent.vue';
import ProductReviewsComponentVue from '@/components/ProductReviewsComponent.vue';
export default {

    components: {
        HeaderComponentVue,
        ProductDetailsComponentVue,
        ProductReviewsComponentVue
    }
}
</script>

<style>

</style>