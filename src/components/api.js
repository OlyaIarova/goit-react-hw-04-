import axios from 'axios';

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async (searchQuery, currantPage) => {
  const response = await axios.get(`search/photos/`, {
    params: {
      client_id: `-cUxxX-eTqFLgcrho8-WkPDv09IXejeeFohcUu8oLqg`,
      query: searchQuery,
      per_page: 12,
      page: currantPage,
      orientation: `landscape`,
    },
  });
  return response.data.results;
};


