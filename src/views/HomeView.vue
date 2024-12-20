<script setup>
import HeaderView from './HeaderView.vue';
</script>

<template>
  <div class="home">
    <HeaderView/>
</div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100vh; /* Altura igual à tela do dispositivo */
  background-image: url('../assets/image/Venom.jpg'); /* Caminho da imagem */
  background-size: cover; /* Faz a imagem cobrir toda a área */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede a repetição da imagem */
}

img {
  height: 100%;
  width: 100%;
}

</style>