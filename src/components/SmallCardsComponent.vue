<template>
 
</template>

<script>
import { onMounted, ref } from "vue";
import { getData } from "../composables/index"
export default {
  name: 'SmallScardsComponent',
  setup() {

  //  const products = ref('[]');
    const newArrivals = ref('[]');

    onMounted(async () => {

      const results = await getData()
      const newArrivalsFiltered = await results.filter((d) => d.isNew);
      newArrivals.value = newArrivalsFiltered
    });

    return {
      newArrivals
    }
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
