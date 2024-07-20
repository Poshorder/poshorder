<template>
  <div class="banner">
    <div class="cat">
      <div class="text">
        <h2>click, click shop</h2>
        <span>
          <img src="/public/poshorder-logo.png" alt="" />
        </span>
      </div>
      <RouterLink to="" class="cat-btn">Shop now</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerComponent'
}
</script>

<style scoped>
.banner {
  width: var(--container-width);
  height: 70vh;
  background-image: url('/src/images/banner-img.jpg');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin: 7% auto 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 300em 0 inset rgba(3, 3, 3, 0.4);
}

.cat {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text {
  width: 100%;
  text-align: center;
  position: relative;
}

.text h2 {
  font-size: 5em;
  word-break: break-all;
  font-weight: 800;
  text-transform: capitalize;
  color: #ffffff;
}

.text span img {
  width: 10em;
  height: 10em;
  object-fit: cover;
}

.cat-btn {
  text-decoration: none;
  outline: none;
  font-size: 1.5em;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.4em 1.7em;
  border-radius: 0.4em;
  font-weight: 700;
}


@media screen and (max-width: 700px) {

  .text h2{
  display: none;
  }
 
}
</style>
