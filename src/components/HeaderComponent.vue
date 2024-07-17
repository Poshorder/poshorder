<template>
  <header>
    <RouterLink to="" class="site-name">poshorder</RouterLink>
    <nav>
      <RouterLink to="#">category</RouterLink>
      <RouterLink to="#">what's new</RouterLink>
      <RouterLink to="#">delivery</RouterLink>
    </nav>
    <div class="user-account">
      <div class="account">
        <RouterLink to="#">
          <PhUser size="25" weight="fill" />
          <p>account</p>
        </RouterLink>
      </div>
      <hr />
      <div class="bag">
        <RouterLink to="#">
          <PhShoppingBag size="25" weight="fill" />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { PhShoppingBag, PhUser } from '@phosphor-icons/vue'

export default {
  name: 'HeaderComponent',

  components: {
    PhUser,
    PhShoppingBag
  }
}
</script>

<style scoped>
header {
  width: var(--max-width);
  background-color: var(--color-background);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em;
  z-index: 5;
}

.site-name {
  font-size: 1.3em;
  text-decoration: none;
  color: #333;
  text-transform: capitalize;
  font-weight: 700;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  text-transform: capitalize;
}

.user-account {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  background-color: #d9d9d9;
  padding: 0.3em;
  border-radius: 0.3em;
}

.user-account hr {
  height: 1.2em;
  width: 0.1em;
}
.user-account .account {
  flex-grow: 1;
  display: grid;
  place-items: center;
  gap: 0.5em;
  cursor: pointer;
}

.account a {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.account a p {
  text-transform: capitalize;
  font-weight: 500;
  font-size: 0.8em;
}

.bag a {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
