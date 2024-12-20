<script setup>

</script>

<template>
    <header>
    <nav>
      <router-link to="/"><img class="logo" src="../assets/image/logo-png.png" alt="Logo-icone"></router-link>
      <router-link class="nav-link" to="/">HOME</router-link>
      <router-link class="nav-link" to="/filmes">FILMES</router-link>
      <router-link class="nav-link" to="/tv">SERIES</router-link>
    </nav>
  </header>
  </template>

  <style scoped>
.logo {
  width: 80px;
  height: 60px;
  cursor: pointer;
}

  header {
    display: flex;
    top: 0;
    position: absolute;
    z-index: 1000;
    height: 6rem;
    background-color: transparent;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  
  nav {
    column-gap: 5rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  .nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  position: relative;
  padding: 3px;

}


  nav a {
    text-decoration: none;
    color: #fff;
  }
  
  </style>