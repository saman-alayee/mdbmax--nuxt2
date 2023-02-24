<template>
  <div class="card inside-card mb-3">
    <img
      class="card-img-top image-size"
      :src="image"
      alt="Card image cap"
    />
    <div class="card-body">
      <div class="price-section">
        <h5 class="card-title">{{ title }}</h5>
        <h5>{{price}}</h5>
        </div>
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
    image: {
      type: String,
      required: true,
    },
    price: {
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
.price-section {
  display: flex;
  justify-content: space-between ;
}
.image-size{
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
