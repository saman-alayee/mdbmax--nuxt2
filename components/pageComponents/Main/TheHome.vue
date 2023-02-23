<template>
  div
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
</template>

<script>
import baseButton from '../../UI/Button/baseButton.vue'
export default {
  name: "TheHome",
  components:{
    baseButton,
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
  height:75vh;
}
.image-container h1 {
      color: var(--green);
}
</style>
