<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import api from '@/plugins/axios';
const router = useRouter()

function openMovie(movieId) {
  router.push({ name: 'MovieDetails', params: { movieId } });
}

import Loading from 'vue-loading-overlay';
import { useGenreStore } from '@/stores/genre';

const genreStore = useGenreStore();
const isLoading = ref(false);
const movies = ref([]);
const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR');

const listMovies = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/movie', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  movies.value = response.data.results;
  isLoading.value = false;
};

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('movie');
  isLoading.value = false;
});



</script>

<template>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listMovies(genre.id)"
      class="genre-item"
    >
      {{ genre.name }}
    </li>
  </ul>
    
  <loading v-model:active="isLoading" is-full-page />

  <div class="movie-list">
    <div v-for="movie in movies" :key="movie.id" class="movie-card">

      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-release-date">{{ formatDate(movie.release_date) }}</p>
        <p class="movie-genres">
          <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listMovies(genre_id)"
            :class="{ active: genre_id === genreStore.currentGenreId }">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.movie-title, .movie-release-date {
  color: #fff;
}
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
  margin-top: 7rem;
}

.genre-item {
  background-color: #000000;
  border-radius: 1rem;
  padding: 0.5rem 2rem;
  color: #fff;
  transition: 200ms ease;
}

.genre-item:hover {
  cursor: pointer;
  color: black;
  background-color: #ffffff;
  box-shadow: 0 0 0.5rem #723838;
}

.movie-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.movie-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.movie-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.movie-details {
  padding: 0 0.5rem;
}

.movie-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.movie-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.movie-genres span {
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #000000;
  font-size: 0.8rem;
  font-weight: bold;
}

.movie-genres span:hover {
  cursor: pointer;
  background-color: #000000;
  color: white;
  box-shadow: 0 0 0.5rem #ffffff;
}

.active {
  background-color: #000000;
  font-weight: bolder;
}

.movie-genres span.active {
  background-color: #000000;
  color: #ffffff;
  font-weight: bolder;
}
</style>