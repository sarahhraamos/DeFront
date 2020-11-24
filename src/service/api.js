const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://bolaosever.herokuapp.com/'
})

export default api