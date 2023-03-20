<template>
<nav class="navbar navbar-container justify-content-between">
  <a class="navbar-brand">
    <img src="@/assets/images/main-logo.png" width="250" alt="">
  </a>
  <div>
   <b-dropdown text="Language" variant="light" class="m-1"  style="height: 42px;">
      <b-dropdown-item-button><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></b-dropdown-item-button>
      <b-dropdown-item-button><nuxt-link :to="switchLocalePath('fa')">Persian</nuxt-link></b-dropdown-item-button>
    </b-dropdown>
  <nuxt-link to="/"><base-button style="font-size:1rem;" :text="$t('login')" /></nuxt-link>
  
  </div>
</nav>
</template>

<script>
import baseButton from '../../UI/Button/baseButton.vue';


export default {
  components: { baseButton },
  name: "TheHeader",
 
};
</script>


<style scoped>
.navbar-container  {
  background-color: var(--dark--green);
}
</style>
