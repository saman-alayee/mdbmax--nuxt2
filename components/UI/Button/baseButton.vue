<template>
  <button :style="`width: ${width}%`, `color: ${color}`" class="inside-btn">{{ text }}</button>
</template>

<script>
export default {
  name: "baseButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    color: {
      type: String,
      required: true,
    },
    
  },
};
</script>

<style scoped>
.inside-btn {
  background-color: var(--green);
  padding: 8px 24px;
  border-radius: 24px;
  border: none;
  font-size: 1rem;
}
</style>
