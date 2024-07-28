<template>
  <main class="category-container">
    <button class="show-filter" @click="toggleAside">
      <PhArrowsHorizontal :size="32" fill="#323232" />
    </button>
    <aside :class="{ show: showAside }">
      <button>smartphones</button>
      <button>smartwatches</button>
      <button>headsets</button>
    </aside>

    <div class="wrapper" :class="{ show_aside: showAside }">
      <div class="small-card">
        <RouterLink to="">
          <div class="img-cover">
            <button>
              <PhHeart size="25" weight="fill" fill="#1C2837" />
            </button>
            <img src="/src/images/watch-1.jpg" alt="smart watch" />
          </div>
          <h4>smartwatch</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </RouterLink>
        <div class="cat">
          <button>add to cart</button>
          <span>HT 1500</span>
        </div>
      </div>
      <div class="small-card">
        <RouterLink to="">
          <div class="img-cover">
            <button>
              <PhHeart size="25" weight="fill" fill="#1C2837" />
            </button>
            <img src="/src/images/phone-1.jpg" alt="Iphone" />
          </div>
          <h4>Iphone 14 pro max</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </RouterLink>
        <div class="cat">
          <button>add to cart</button>
          <span>HT 15000</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { PhArrowsHorizontal } from '@phosphor-icons/vue'
import { ref } from 'vue'

export default {
  components: {
    PhArrowsHorizontal
  },
  setup() {
    const showAside = ref(false)

    const toggleAside = () => {
      showAside.value = !showAside.value
    }
    return {
      showAside,
      toggleAside
    }
  }
}
</script>

<style scoped>
.category-container {
  width: var(--container-width);
  margin: 10% auto 0;
  position: relative;
}

.show-filter {
  position: absolute;
  top: -10%;
  border: none;
  border-radius: 0.5em;
  padding: 0.3em;
  background-color: var(--primary-color);
}

.category-container aside {
  position: fixed;
  max-width: 10rem;
  top: 20%;
  left: 0;
  z-index: 4;
  overflow: hidden;
  height: 100vh;
  transform: translateX(-340rem);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid rgba(183, 185, 190, 0.4);
  /* padding: 0.7em; */ /* Uncomment if you need padding */
  transition: 0.2s ease-in;
  padding: 0.3em;
  /* margin: 10% 0; */
}

.category-container aside.show {
  transform: translateX(0);
  transition: 0.2s ease-in;
}

.category-container aside button {
  width: 100%;
  background: var(--color-background);
  padding: 1em;
  text-transform: capitalize;
  font-weight: 700;
  text-align: left;
  border: none;
  margin: 0.4em 0;
  border-bottom: 1px solid rgba(183, 185, 190, 0.4);
}

.category-container aside button:hover {
  border-left: 0.3em solid var(--primary-color) !important;
}
.wrapper {
  width: 100%;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 17rem));
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  grid-gap: 1em;
  padding-bottom: 10em;
  transition: 0.2s ease-out;
}

.wrapper.show_aside {
  transform: translateX(7em);
  transition: 0.2s ease-in;
}

@media screen and (max-width: 900px) {
  .category-container {
    margin: 15% auto 0;
  }
}
@media screen and (max-width: 700px) {
  .category-container {
    margin: 20% auto 0;
  }
}
@media screen and (max-width: 500px) {
  .category-container {
    margin: 30% auto 0;
  }
}
</style>
