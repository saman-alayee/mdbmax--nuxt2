<template>
  <div class="card inside-card mb-3">
    <img
      class="card-img-top"
      src="https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ describe }}</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "baseButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.inside-card {
  background-color: var(--white);
  border-radius: 8px;
  border: none;
}
</style>
