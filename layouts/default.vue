<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <div><Nuxt /></div>
   <div class="mt-3"><Footer /></div> 

  </div>
</template>

<script>
import TheHeader from "@/components/pagecomponents/Navigation/TheHeader";
import TheSidenav from "@/components/pagecomponents/Navigation/TheSidenav";
import Footer from "@/components/pagecomponents/Footer/index.vue";

export default {
  components: {
    TheHeader,
    TheSidenav,Footer
  },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>
<style scoped>
html {
  font-size: 30px;
}
body {
  margin: 0;
  font-size: 30px;
  background-color: var(--blue);
}
</style>
