import axios from 'axios';

const API_URL = 'http://localhost:8080';
// const API_URL = 'https://apfjunior-aulas-sd2.herokuapp.com';
const mapboxToken = '';

export function fetchProducts() {
  return axios (`${API_URL}/products`);
}

export function fetchLocalMapBox(local: string) {
  return axios(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`
  );
}
