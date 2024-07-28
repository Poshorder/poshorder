<template>
  <div>
    <header>
      <RouterLink :to="{ name: 'home' }" class="site-name">poshorder</RouterLink>
      <nav>
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
      <button class="open-menu" @click="handleClick">
        <PhList size="30" weight="fill" fill="#252525" />
      </button>
    </header>
    <MobileNavComponent v-if="openMenu" />
  </div>
  <RouterView/>
</template>

<script>
import MobileNavComponent from '@/components/MobilenavComponent.vue'

import { PhShoppingBag, PhUser, PhList } from '@phosphor-icons/vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'HeaderComponent',

  components: {
    PhUser,
    PhShoppingBag,
    PhList,
    MobileNavComponent
  },
  setup() {
    const openMenu = ref(false)

    const handleClick = () => {
      openMenu.value = !openMenu.value
    }

    onMounted(() => {

      const header = document.querySelector('header');

      window.addEventListener('scroll',() => {
        if (window.scrollY > 30) {
          header.classList.add('page-scrolling')
        }else {
          header.classList.remove('page-scrolling')

        }
      })
    })
    return {
      openMenu,
      handleClick
    }
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
  transition: 0.2s ease-in;
  transition-timing-function: cubic-bezier(.11,.4,.92,.67);
 
}

header.page-scrolling {
  top: 0.5%;
  border-radius: 0.7em;
  border: 1px solid rgba(183,185,190,0.4);
  box-shadow: 0 0 0.5em rgba(183,185,190,0.4);
  transition: 0.2s ease-in;
  transition-timing-function: cubic-bezier(.11,.4,.92,.67);
 
}

.open-menu {
  outline: none;
  background: transparent;
  border: none;
  display: none;
  cursor: pointer;
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
  width: fit-content;
  background-color: #d9d9d9;
  padding: 0.3em;
  border-radius: 0.3em;
}

.user-account hr {
  height: 1.2em;
  width: 0.1em;
  margin-left: 0.5em;
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
  margin-left:0.5em;
}

@media screen and (max-width: 700px) {
  nav {
    display: none;
  }

  .user-account {
    display: none;
  }

  .open-menu {
    display: block;
  }
}
</style>
