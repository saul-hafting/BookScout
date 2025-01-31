import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q=QUERY&key=YOUR_API_KEY',
    params: {
        key: 'AIzaSyBQECV5v3l-dDGG2UVX6Ztge0F4Y-3p7W0'
    }
})