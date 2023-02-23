<template>
  <div>
  <div
    class="image-container"
    :style="{
      'background-image': `url(${require('@/assets/images/BackgroundImage.jpg')})`,
    }"
  >
    <div class="text-container">
      <h1>grab up to 50% off on <br>  selected headphone</h1>
      <baseButton class="mt-4" text="Buy Now" color="var(--white)"/>
    </div>
</div>
<div class="row">
  <div class="col-lg-3">
    <productCard title="Airpod" describe="apple airpod is"/>
  </div>
  
</div>
</div>
  </div>
</template>

<script>
import baseButton from '../../UI/Button/baseButton.vue'
import productCard from '../../UI/Cards/productCard.vue'
export default {
  name: "TheHome",
  components:{
    baseButton,productCard
  },
};
</script>

<style scoped>
.image-container {
  width:100%;
  padding:48px;
  border-radius: 16px;
  background-size:100% 80%;
  background-repeat:no-repeat;
  height:30rem;
}
.image-container h1 {
      color: var(--green);
}
</style>
