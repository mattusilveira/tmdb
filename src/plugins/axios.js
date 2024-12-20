import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTU5NjEyMzdhNGM1ZmU3OGRlY2U0ZjBiNWQ2M2M2NCIsIm5iZiI6MTczMTUwNzY5Ni42MDksInN1YiI6IjY3MzRiNWYwM2U4MmJhNzlmY2NmMmY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aa3jrv230RJDtEimZi94lBDNvIE_P3FnyKkn0ULBBGY`,
  },
});

export default api;