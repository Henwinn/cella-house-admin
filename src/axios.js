import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['key'] = '86fd1b1d861933d64c01dbf67235568e'