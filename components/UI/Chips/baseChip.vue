<template>
  <!-- Example split danger button -->
<div>
  <b-dropdown id="dropdown-1" variant="outline-secondary" :text="text" class="m-md-2">
    <b-dropdown-item>{{firstItem}}</b-dropdown-item>
    <b-dropdown-item>{{secondItem}}</b-dropdown-item>
    <b-dropdown-item>{{thirdItem}}</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
export default {
  name: "baseChip",
  props: {
    text: {
      type: String,
      required: true,
    },
    firstItem: {
      type: String,
      required: true,
    },
    secondItem: {
      type: String,
      required: true,
    },
    thirdItem: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
