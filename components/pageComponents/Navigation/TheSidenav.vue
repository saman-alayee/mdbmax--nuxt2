<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <div v-if="show" class="sidenav">
        <ul class="nav-list" @click="$emit('close')">
          <div class="nav-item-container">
            <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
          </div>
          <div class="nav-item-container">
            <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
          </div>
          <div class="nav-item-container">
            <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          </div>
          <div class="nav-item-container">
            <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
          </div>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style scoped>
.sidenav-container {
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 2rem;
}

.nav-item-container a:hover,
.nav-item-container a:active {
  transition: 0.8s;
  background-color: #4461f2;
  color: #fff;
  display: flex;
  justify-content: center;
  border-radius: 20px;
}
</style>
