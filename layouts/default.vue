<template>
  <div class="main">
    <TheHeader  />
   
    <div><Nuxt /></div>
   <div class="mt-3"></div> 

  </div>
</template>

<script>
import TheHeader from "@/components/pagecomponents/Navigation/TheHeader";

export default {
  components: {
    TheHeader  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
html {
  font-size: 30px;
}
.main {
  margin: 0;
  height: 100vh;
  background-color: var(--light--green) !important;
}
</style>
