<template>
  <div>
    <HeaderComponentVue />
    <BannerComponentVue />
    <TopCategoriesComponent />
    <NewArrivalsComponentVue />
  </div>
</template>

<script>
import HeaderComponentVue from '../components/HeaderComponent.vue'
import BannerComponentVue from '../components/BannerComponent.vue'
import TopCategoriesComponent from '../components/TopCategoriesComponent.vue'
import NewArrivalsComponentVue from '../components/NewArrivalsComponent.vue'

export default {
  components: {
    HeaderComponentVue,
    BannerComponentVue,
    TopCategoriesComponent,
    NewArrivalsComponentVue
  }
}
</script>

<style></style>
