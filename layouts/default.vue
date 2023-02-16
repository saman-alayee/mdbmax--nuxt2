<template>
  <div>
    
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <v-container><Nuxt />
    </v-container>
    <Footer/>
  </div>
</template>

<script>
import TheHeader from "@/components/pagecomponents/Navigation/TheHeader";
import TheSidenav from "@/components/pagecomponents/Navigation/TheSidenav";

export default {
  components: {
    TheHeader,
    TheSidenav
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
