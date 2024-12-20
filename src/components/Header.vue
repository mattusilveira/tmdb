<template>
    <header>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/filmes">FILMES</router-link>
      <router-link to="/tv">SERIESS</router-link>
    </nav>
  </header>
  </template>
  
  <style scoped>
  header {
    height: 6rem;
    display: flex;
    background-color: transparent;
    font-size: 1.2rem;
    padding-left: 30rem;
  }
  
  nav {
    column-gap: 10rem;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  
  nav a {
    text-decoration: none;
    color: #ffffff;
  }
  
  </style>