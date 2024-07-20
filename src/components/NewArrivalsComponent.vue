<template>
  <div class="container">
    <h2>Recently added</h2>

    <div class="wrapper-arrivals">

      <div class="card">
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
  </div>
</template>

<script>
import { PhHeart } from '@phosphor-icons/vue'
export default {
  name: 'ArrivalsComponent',
  components: { PhHeart }
}
</script>

<style>
.wrapper-arrivals {

  width: 100%;
  margin: 0.7em auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(17rem,17rem));
  gap: 0.7em;
}

.wrapper-arrivals .card {

  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid rgba(183,185,190,0.5);
  overflow: hidden;
  padding: 0.4em;
}

.wrapper-arrivals .card a {
  text-transform: capitalize;
  outline: none;
}

.wrapper-arrivals .card a .img-cover{
 width: 100%;
 height: 10em;
 position: relative;
 overflow: hidden;
 transition: 0.2s ease-in;
}

.wrapper-arrivals .card a .img-cover button {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  z-index: 2;
  cursor:pointer;
}

.wrapper-arrivals .card a .img-cover img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
}

.wrapper-arrivals .card a .img-cover img:hover {
  transform: scale(1.1);
  transition: 0.2s ease-out;
}

.wrapper-arrivals .card h4{
  font-size: 1.2em;
  font-weight: 700;
}

.wrapper-arrivals .card p{
  font-size: 0.8em;
  margin: 0;
  text-align: left;
  word-break: break-all;
  padding: 0 0 1.5em;
}

.wrapper-arrivals .card .cat{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
 padding: 0.4/7em;
}


.wrapper-arrivals .card .cat button {

  outline:none;
  border: none;
  background-color: var(--secondary-color);
  color: var(--text-color);
  padding: 0.8em;
  border-radius: 0.3em;
  text-transform: capitalize;
  cursor:pointer;
  transition: 0.2s ease-out;
}

.wrapper-arrivals .card .cat button:hover {
  background-color: var(--primary-color);
  transition: 0.2s ease-in;
}


.wrapper-arrivals .card .cat span {
  font-size: 0.8em;
  font-weight: 500;
}
</style>
