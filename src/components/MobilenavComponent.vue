<template>
  <div class="mobile-nav">
    <nav>
      <RouterLink to="#">category</RouterLink>
      <RouterLink to="#">what's new</RouterLink>
      <RouterLink to="#">delivery</RouterLink>
    </nav>

    <hr />
    <div class="user-account">
      <div class="account box">
        <RouterLink to="#">
          <PhUser size="25" weight="fill" />
          <p>account</p>
        </RouterLink>
      </div>
      <div class="bag box">
        <RouterLink to="#">
          <PhShoppingBag size="25" weight="fill" />
          <p>bag</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { PhShoppingBag, PhUser } from '@phosphor-icons/vue'

export default {
  components: {
    PhUser,
    PhShoppingBag
  }
}
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(98%, 15rem);
  background-color: var(--color-background);
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 5;
  border-radius: 0.5em;
  box-shadow: 0 0 8em rgba(183, 185, 190, 0.7);
}

.mobile-nav hr {
  width: 100%;
  display: inline-block;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5em;
  gap: 1.7em;
  padding-bottom: 2em;
}

nav a {
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-text);
}

.user-account {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: start;
  gap: 1.7em;
  padding-top: 1em;
}

.account {
  display: flex;
  width: 100%;
  align-items: center;
  text-transform: capitalize;
}

.account .box {
  width: 100%;
}

.box a {
  display: flex;
  align-items: center;
  gap: 0.5em;
  text-transform: capitalize;
}
</style>
