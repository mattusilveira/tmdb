import { reactive, computed, ref } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useMovieStore = defineStore('movie', () => {
  const state = reactive({
    currentMovie: {},
  });

  const releasesMovies = ref([])
  const popularMovie = ref(null)
  const currentMovie = computed(() => state.currentMovie);

  const getMovieDetail = async (movieId) => {
    const response = await api.get(`movie/${movieId}`);
    state.currentMovie = response.data;
  };

  const findPopularMovie = async () => {
    const response = await api.get("movie/popular", {
      params: {
        page: 1
      }
    })
    popularMovie.value = response.data.results[0]
  }
  const findReleasesMovies = async () => {
    const response = await api.get('movie/now_playing', {
      params: {
        page: 1
      }
    })
    releasesMovies.value = response.data.results.slice(0, 7)
  }

  return { currentMovie, getMovieDetail, findPopularMovie, popularMovie, releasesMovies, findReleasesMovies };
});