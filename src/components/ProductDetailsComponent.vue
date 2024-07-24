<template>
  <div class="product-container">
    <div class="product-image">
      <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="" />
      <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="" />
    </div>
    <div class="product-details select">
      <h2>headset v2</h2>
      <h3>$ 20.98</h3>
      <span>ID: 123456</span>
      <div class="select-q select">
        <button>
          <PhPlus size="20" />
        </button>
        <span>1</span>
        <button>
          <PhMinus size="20" />
        </button>
      </div>
      <div class="select-color select">
        <h3>select color:</h3>
        <select name="" id="">
          <option value="red">red</option>
          <option value="blue">blue</option>
        </select>
      </div>
      <div class="select-size select">
        <h3>select size:</h3>
        <select name="" id="">
          <option value="small">small</option>
          <option value="xl">xl</option>
        </select>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsum Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nulla, voluptates?
      </p>
      <div class="action-btns">
        <button class="addto-cart">add to cart</button>
        <button class="wishList-Btn">
          <PhHeart weight="fill" size="20" />
        </button>
        <button class="share-btn">share with friends !</button>
      </div>
    </div>
  </div>
</template>

<script>
import { PhHeart, PhPlus, PhMinus } from '@phosphor-icons/vue'
export default {
  components: {
    PhHeart,
    PhPlus,
    PhMinus
  }
}
</script>

<style scoped>
.product-container {
  margin: 10% auto 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
}

@media screen and (max-width: 900px) {
  .product-container {
    flex-direction: column;
    align-items: center;
  }
}
.product-image {
  width: min(25rem, 100%);
  height: 25rem;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow-x: auto;
  padding: 0.5em;
}

.product-image img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
  margin: 0 0.3em;
}

.product-details {
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1em;
}

@media screen and (max-width: 900px) {
  .product-details {
    width: 100%;
  }
}
.product-details .select {
  width: 100%;
  outline: none;
  margin: 0.6em 0;
}

.product-details .select-q button {
  outline: none;
  background-color: var(--color-background);
  border: 1px solid rgba(183, 185, 190, 0.5);
  box-shadow: 0 0 0.1em rgba(3, 3, 3, 0.2);
  padding: 0.7em;
  border-radius: 0.3em;
}

.product-details .select-q span {
  display: inline-block;
  font-size: 1em;
  padding: 1em;
  font-weight: 700;
}

.product-details .select h3 {
  font-size: 1em;
  text-transform: capitalize;
  color: var(--text-color);
}

.product-details .select select {
  width: 30%;
  padding: 0.5em;
  text-transform: capitalize;
  font-weight: 500;
  font-family: var(--font-family);
  outline: none;
}

.product-details h2 {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 3em;
  color: var(--text-color);
}

.product-details h3 {
  font-weight: 700;
}

.product-details p {
  margin: 1em 0;
  width: 30rem;
  word-break: break-all;
  text-align: left;
}

.product-details span {
  font-size: 0.6em;
  font-weight: 600;
}

.action-btns {
  margin-top: auto;
  display: flex;
  justify-content: left;
  align-items: center;
}

.action-btns button {
  outline: none;
  margin: 0.7em;
  text-transform: capitalize;
  padding: 1em;
  display: grid;
  place-content: center;
  border: 1px solid rgba(183, 185, 190, 0.5);
  border-radius: 0.3em;
  background-color: var(--color-background);
  box-shadow: 0 0 1.4em rgba(3, 3, 3, 0.1);
}

.addto-cart {
  background-color: var(--primary-color) !important;
}
.wishList-Btn {
  width: 3em;
  height: 3em;
}
</style>
