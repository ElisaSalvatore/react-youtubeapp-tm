import axios from 'axios';

const KEY = 'AIzaSyCG-P44gwkZ9KTwgzRlOlxn1mXeXIn0PJo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, statistics',
        key: KEY,
    }
  });