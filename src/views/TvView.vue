<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import { useGenreStore } from '@/stores/genre'
import { useRouter } from 'vue-router'
const router = useRouter()


function openTV(tvId) {
  router.push({ name: 'TVDetails', params: { tvId } });
}
const genreStore = useGenreStore()

// function getGenreName(id) {
//   const genero = genres.value.find((genre) => genre.id === id)
//   return genero.name
// }

const isLoading = ref(false)

// const genres = ref([])

onMounted(async () => {
  isLoading.value = true
  await genreStore.getAllGenres('tv')
  isLoading.value = false
})

const tvs = ref([])

const listTvs = async (genreId) => {
  genreStore.setCurrentGenreId(genreId);
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR',
    },
  });
  tvs.value = response.data.results;
  isLoading.value = false;
};
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')
</script>

<template>
  <ul class="genre-list">
    <li
      v-for="genre in genreStore.genres"
      :key="genre.id"
      @click="listTvs(genre.id)"
      class="genre-item"
    >
      {{ genre.name }}
    </li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />
  <div class="tv-list">
    <div v-for="tv in tvs" :key="tv.id" class="tv-card">
      <img
  :src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
  :alt="tv.title"
  @click="openTV(tv.id)"
/>
      <div class="tv-details">
        <p class="tv-title">{{ tv.name }}</p>
        <p class="tv-release-date">{{ formatDate(tv.first_air_date) }}</p>
        <p class="tv-genres">
          <span
            v-for="genre_id in tv.genre_ids"
            :key="genre_id"
            @click="listTvs(genre_id)"
            :class="{ active: genre_id === genreStore.currentGenreId }"
          >
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tv-title, .tv-release-date {
  color: #fff;
}
.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin-bottom: 2rem;
  margin-top: 7rem;
  background-color: rgb(20, 20, 20);
}

.genre-item {
  background-color: #616161;
  padding: 0.5rem 2rem;
  color: #ffffff;
  transition: 200ms ease;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #ffffff;
  color: black;
  box-shadow: 0 0 0.5rem #000000;
}
.tv-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}

.tv-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.tv-details {
  padding: 0 0.5rem;
}

.tv-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}
.tv-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.tv-genres span {
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #000000;
  font-size: 0.8rem;
  font-weight: bold;
}

.tv-genres span:hover {
  cursor: pointer;
  background-color: #000000;
  box-shadow: 0 0 0.5rem #ffffff;
  color: #fff;
}
.active {
  background-color: #ffffff;
  color: black;
  font-weight: bolder;
}

.tv-genres span.active {
  background-color: #000000;
  color: #fff;
  font-weight: bolder;
}
</style>