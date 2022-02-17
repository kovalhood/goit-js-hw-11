// const BASE_URL = 'https://pixabay.com/api';
// const KEY = '25716133-5af1cc1f28b9664f0c877d305';

// function fetchGallery(search) {
//     return fetch(`${BASE_URL}/?key=${KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true`)
//         .then(response => {
//         if (response.status === 404) {
//             throw new Error(response.status);
//             }
//             console.log(response)
//         return response.json();
//     })
// };

// export default { fetchGallery };

const API_KEY = '25716133-5af1cc1f28b9664f0c877d305';
const BASE_URL = 'https://pixabay.com/api';

export default class GalleryApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchGallery() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    return fetch(url)
      .then(response => response.json())
      .then((images) => {
        this.incrementPage();
        return images;
      });
  }

  incrementPage() {
    this.page += 1;
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