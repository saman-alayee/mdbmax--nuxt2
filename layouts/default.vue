<template>
  <div class="main">
    <TheHeader />

    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/pagecomponents/Navigation/TheHeader";

export default {
  components: {
    TheHeader,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
html {
  font-size: 30px;
}
.main {
  margin: 0;
  height: 100%;
   padding-bottom: 7rem;
  background-color: var(--light--green) !important;
}
a {
  text-decoration: none;
  color: var(--white);
}
</style>
