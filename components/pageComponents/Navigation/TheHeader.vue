<template>
<nav class="navbar navbar-container justify-content-between">
  <a class="navbar-brand">
    <img src="@/assets/images/main-logo.png" width="250" alt="">
  </a>
  <div>
  <base-button text="Login"/>
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
