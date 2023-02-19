<template>
  <div class="input-container">
        <input class="input-form" type="seach" placeholder="Search Product" />
    <i class="bi bi-search"></i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
}
.input-container i {
    position: absolute;
    right: 10px;
    color: #9a9a9a;
}
.input-form {
  border-radius: 16px;
  height: 2.2rem;
  border: none;
  padding: 8px;
  background-color: var(--gray);
  outline: 0;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #9a9a9a;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #9a9a9a;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #9a9a9a;
}
input[type="search"]:focus {
  border-color: var(--gray);
  outline: 0;
}
</style>