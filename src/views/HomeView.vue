<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
import ReleasesMovies from '@/components/ReleasesMovies.vue';
const movieStore = useMovieStore();

onMounted(() => {
  movieStore.findPopularMovie()
  movieStore.findReleasesMovies()
})

</script>

<template>
  <main>
    <div class="popular-movie" v-if="movieStore.popularMovie">
      <img :src="`https://image.tmdb.org/t/p/original${movieStore.popularMovie.backdrop_path}`" alt="">
      <div class="infos">
        <h1>{{ movieStore.popularMovie.title }}</h1>
        <p>{{ movieStore.popularMovie.overview }}</p>
      </div>
    </div>
    <ReleasesMovies />
  </main>
</template>

<style scoped>

.popular-movie {
  width: fit-content;
}

.popular-movie img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

.infos {
  color: white;
  position: absolute;
  top: 20%;
  margin-top: 2rem;
  margin-left: 5rem;
  width: 400px;
}

.infos h1 {
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  font-size: 3rem;
}

.infos p {

  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/*aplicação da animação*/

.infos {
  animation: slideUp 2s ease-out;
}
</style>