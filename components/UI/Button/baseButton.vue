<template>
  <button :style="`width: ${width}%`" class="inside-btn">{{ text }}</button>
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
  },
};
</script>

<style scoped>
.inside-btn {
  background-color: var(--green);
  color: var(--white);
  padding: 8px 24px;
  border-radius: 24px;
  border: none;
  font-size: 1rem;
}
button:hover {
  background-color: var(--white);
  color: var(--black);
  border:1px solid var(--black);
}
</style>
