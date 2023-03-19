<template>
  <button
    v-if="outline"
    :style="`background-color: ${backgroundColor}; color: ${textColor}`"
    class="inside-outline-btn"
    type="button"
  >
    {{ text }}
  </button>
  <button
    v-else
    :style="`background-color: ${backgroundColor}; color: ${textColor}`"
    class="inside-btn"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "baseButton",
  data() {
    return {
      outline: false,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
    },
    textColor:{
      type:String,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
 
};
</script>

<style scoped>
.inside-btn {
  background-color: var(--white);
  color: var(--black);
  padding: 8px 20px;
  border-radius: 4px;
  border: none;
  font-size: 1.1rem;
  font-weight: 400;
}
.inside-btn:hover {
  background-color: gainsboro;
}
.inside-outline-btn {
  color: var(--yellow);
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--dark--green);
  border: 2px solid var(--yellow);
  font-size: 1.1rem;
  font-weight: 400;
}
.inside-outline-btn:hover {
  background-color: var(--yellow);
  color: var(--white);
}
</style>
