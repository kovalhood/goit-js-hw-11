import axios from 'axios';

export default class GalleryApi {
  constructor() {
    this.API_KEY = '?key=25716133-5af1cc1f28b9664f0c877d305';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.image_type = "image_type=photo";
    this.orientation = "orientation=horizontal"
    this.safesearch = "safesearch=true";
    this.per_page = 40;
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchGallery() {
    const searchParams = `${this.image_type}&${this.orientation}&${this.safesearch}&page=${this.page}&per_page=${this.per_page}`;
    const dataResponse = await axios.get(`${this.BASE_URL}${this.API_KEY}&q=${this.searchQuery}&${searchParams}`);

    this.page += 1;
    
    return dataResponse;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}