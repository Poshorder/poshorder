<template>
  <div class="product-container">
    <div class="product-image">
        <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="">
        <img src="/src/images/daniel-romero-6V5vTuoeCZg-unsplash.jpg" alt="">
    </div>
    <div class="product-details">
        <h2>headset v2</h2>
        <h3>$20.98</h3>
        <span>ID: 123456</span>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsum.
        </p>
        <div class="action-btns">
            <button>add to cart</button>
            <button class="wishList-Btn">
                <PhHeart weight="fill" size="20"/>
            </button>
            <button class="share-btn">share with friends !</button>
        </div>
    </div>
  </div>

</template>

<script>
import { PhHeart } from "@phosphor-icons/vue"
export default {
    components: {
        PhHeart
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



.product-image {

    width: 25rem;
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
}

.product-details {

    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1em;
}

.product-details h2 {

    text-transform: capitalize;
    font-weight: 500;
}

.product-details h3 {
    font-weight: 700;
}

.product-details p {

    margin: 1em 0;
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
    border: 1px solid rgba(183,185,190,0.5);
    border-radius: 0.3em;
    background-color: var(--color-background);
    box-shadow: 0 0 1.4em rgba(3,3,3,0.1);
}


.wishList-Btn {

    width: 3em;
    height: 3em;
}

.action-btns button:hover {

    background-color: var(--primary-color);
}



</style>