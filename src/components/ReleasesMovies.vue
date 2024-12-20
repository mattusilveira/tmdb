<script setup>
import { ref, onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie';
const movieStore = useMovieStore();

onMounted(() => {
    movieStore.findReleasesMovies()
})
</script>

<template>
    <h1>Top Filmes</h1>
    <div class="container">
        <div class="releases-movies" v-for="movie in movieStore.releasesMovies" :key="movie.id">
            <img :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`" alt="">
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;
}
.releases-movies {
    transition: 200ms ease;
    cursor: pointer;
}
.releases-movies:hover {
    transform: scale(1.05);
    filter: brightness(0.7);
}
h1 {
    color: #fff;
    margin-left: 2rem;
    margin-top: 2rem;
}
</style>