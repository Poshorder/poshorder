<template>
<HeaderComponentVue/>
<main class="category-container">

  <aside>
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

  <div class="wrapper">
    <div class="small-card">
        <RouterLink to="">
          <div class="img-cover">
            <button>
              <PhHeart size="25" weight="fill" fill="#1C2837"/>
            </button>
            <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="" />
          </div>
          <h4>BeatsHeadset</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </RouterLink>
        <div class="cat">
          <button>add to cart</button>
          <span>HT 1500</span>
        </div>
      </div>
    
  </div>
  
</main>
</template>

<script>
import HeaderComponentVue from '@/components/HeaderComponent.vue';

export default {

  components: {
    HeaderComponentVue,
  }
}
</script>

<style scoped>

.category-container {

  width: var(--container-width);
  margin: 7% auto 0;
  display: grid;
  grid-template-columns: repeat(12,1fr);
}

.category-container aside {

  grid-column: 1 / 3;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8em;
  padding: 0.7em;
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

  grid-column: 3 / 13;
  max-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  overflow-y: auto;
  grid-gap: 1em;
  padding-bottom: 10em;
  /* overflow-x: auto; */
}
</style>