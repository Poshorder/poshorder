<template>
  <div>
    <BannerComponentVue />
    <TopCategoriesComponent />
    <NewArrivalsComponentVue />
    <AvailableComponentVue />
  </div>
</template>

<script>
import BannerComponentVue from '../components/BannerComponent.vue'
import TopCategoriesComponent from '../components/TopCategoriesComponent.vue'
import AvailableComponentVue from '@/components/AvailableComponent.vue'
import NewArrivalsComponentVue from '../components/NewArrivalsComponent.vue'

export default {
  components: {
    BannerComponentVue,
    TopCategoriesComponent,
    NewArrivalsComponentVue,
    AvailableComponentVue
  }
}
</script>

<style></style>
