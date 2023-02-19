<template>
  <div class="header-container">
    <header class="box-header">
      <div class="navigation-items">
        <ul class="nav-list">
          
          <li class="nav-item"><nuxt-link to="/Login">get 50% off on selected item    |    shop now  </nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box-header {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}
.nav-list {
  list-style: none;
  padding: 44px;
  margin: 0;
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 0px;
}

.nav-item a {
  text-decoration: none;
  color: var(--white);
  padding: 8px;
  text-transform: capitalize;
}
</style>