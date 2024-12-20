import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useSeriesStore = defineStore('series', () => {
  const state = reactive({
    currentSeries: {},
  });

  const currentSeries = computed(() => state.currentSeries);

  const getSeriesDetail = async (seriesId) => {
    const response = await api.get(`series/${seriesId}`);
    state.currentSeries = response.data;
  };

  return { currentSeries, getSeriesDetail };
});