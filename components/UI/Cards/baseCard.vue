<template>
  <div class="base-card-container">
    <slot name="content"></slot>
    img
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-card-container {
    width: 100%;
    height: 100%;
    background-color: var(--white);
    padding: 16px;
    box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
}
</style>