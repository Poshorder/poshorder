<template>
  <div class="container">
    <h2>shop our top categories</h2>

    <div class="wrapper-category">
      <RouterLink :to="{name: 'electronics'}">
        <h3>electronics</h3>
        <div class="img">
          <img src="/src/images/smart-watch.jpg" alt="" />
        </div>
      </RouterLink>
      <RouterLink to="">
        <h3>clothes</h3>
        <div class="img">
          <img src="/src/images/t-shirts.jpg" alt="" />
        </div>
      </RouterLink>
      <RouterLink to="">
        <h3>shoes</h3>
        <div class="img">
          <img src="/src/images/shoes-on-floor.jpg" alt="" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategoriesComponent'
}
</script>
