import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vuejs-learning-4d547.firebaseio.com'
});

instance.defaults.headers.common['SMTH'] = 'something';

export default instance;
