<template>
<HeaderComponentVue/>
<main class="category-container">
  <button class="show-filter" @click="toggleAside">
    <PhArrowsHorizontal :size="32" />
  </button>
  <aside :class="{ show: showAside}">
 <button>
  smartphones
 </button>
 <button>
  smartwatches
 </button>
 <button>
  headsets
 </button>
  </aside>

  <div class="wrapper" :class="{show_aside: showAside}">

    <div class="small-card">
        <RouterLink to="">
          <div class="img-cover">
            <button>
              <PhHeart size="25" weight="fill" fill="#1C2837"/>
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
              <PhHeart size="25" weight="fill" fill="#1C2837"/>
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
import HeaderComponentVue from '@/components/HeaderComponent.vue';
import { PhArrowsHorizontal } from '@phosphor-icons/vue';
import { ref } from 'vue';

export default {

  components: {
    HeaderComponentVue,
    PhArrowsHorizontal
  },
  setup() {
    const showAside = ref(false);

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
  display: grid;
  grid-template-columns: repeat(12,1fr);
  position: relative;
}

.show-filter {

  position: absolute;
  top: -10%;
}

.category-container aside {
  position: fixed;
  max-width: 10rem;
  top: 20%;
  left: 0;
  z-index: 4;
  overflow: hidden;
  max-height: 50vh;
  transform: translateX(-340rem);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8em;
  border: 1px solid rgba(183,185,190,0.4);
  /* padding: 0.7em; */ /* Uncomment if you need padding */
  transition: 0.2s ease-in;
  /* margin: 10% 0; */
}

.category-container aside.show {
  transform: translateX(0);
  transition: 0.2s ease-in;
}



.category-container aside button {

  width: 100%;
  padding: 1em ;
  text-transform: capitalize;
  font-weight: 700;
  text-align: left;
  background-color: transparent;
  border: none;

}

.category-container aside button:hover {
  border-left: 0.3em solid var(--primary-color) !important;

}
.wrapper {

  grid-column: 1 / 13;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(17rem,17rem));
  justify-content: center;
  overflow-y: auto;
  overflow-x:hidden;
  grid-gap: 1em;
  padding-bottom: 10em;
  transition: 0.2s ease-out;
}


.wrapper.show_aside {
  grid-column: 3 / 13;
  transform: translateX(1em);
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
</style>