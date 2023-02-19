<template>
  <div>
    <TopNavbar />
    <div class="header-container">
      <header class="the-header">
        <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
        <div class="logo">
          <nuxt-link to="/">WD BLOG</nuxt-link>
        </div>
        <div class="navigation-items">
          <ul class="nav-list">
            <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
          </ul>
          
        </div>
        <div class="spacer"></div>
         <div class="input-container">
          <search-input/>
        </div>
        <div class="account-container">
          <ul class="item-list">
            <li class="nav-item bi bi-person">
              <nuxt-link to="/Login">Account</nuxt-link>
            </li>
             <li class="nav-item bi bi-cart">
              <nuxt-link to="/cart">cart</nuxt-link>
            </li>
          </ul>
        </div>

      </header>
    </div>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/pagecomponents/Navigation/TheSideNavToggle";
import TopNavbar from "../Navigation/topNavbar.vue";
import SearchInput from '../../UI/input/searchInput.vue';

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    TopNavbar,
    SearchInput,
  },
};
</script>


<style scoped>
.the-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 28px;
}
.nav-item a {
  font-size: 20px;
}
.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}
.spacer {
  flex: 1;
}
.logo a {
  text-decoration: none;
  color: var(--black);
}

.login-btn {
  transform: skew(-20deg);
  border-radius: 4px;
}
.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 44px;
  margin: 0;
  display: flex;
  justify-content: center;
}
.item-list {
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}
.input-container{
  display: flex;

}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: var(--black);
  padding: 8px;
  font-size: 18px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: var(--blue);
}
</style>
