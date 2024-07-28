<template>
  <div class="container">
    <h2>shop our top categories</h2>

    <div class="wrapper-category" id="top-categories">
      <RouterLink :to="{ name: 'electronics' }">
        <div class="img">
          <img src="/src/images/smart-watch.jpg" alt="Smart Watch" />
        </div>
        <h3>Latest Electronics</h3>
        <hr />
        <p>Discover top-notch SmartPhones, SmartWatches, and Headsets</p>
      </RouterLink>

      <RouterLink to="">
        <div class="img">
          <img src="/src/images/t-shirts.jpg" alt="T-Shirts" />
        </div>
        <h3>Stylish Clothing</h3>
        <hr />
        <p>Explore top brands like Nike, Adidas, Louis Vuitton, and more...</p>
      </RouterLink>

      <RouterLink to="">
        <div class="img">
          <img src="/src/images/shoes-on-floor.jpg" alt="Shoes on Floor" />
        </div>
        <h3>Trendy Footwear</h3>
        <hr />
        <p>Step into style with the latest from Nike, Adidas, Louis Vuitton, and more...</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategoriesComponent'
}
</script>
