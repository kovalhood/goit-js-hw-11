import './css/styles.css';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
    form: document.querySelector('form#search-form'),
    inputField: document.querySelector('input.search-form__input'),
    searchButton: document.querySelector('button.search-form__button'),
    gallery: document.querySelector('div.gallery'),
    loadMoreButton: document.querySelector('button.load-more'),
};

console.log(refs.form, refs.inputField, refs.searchButton, refs.gallery, refs.loadMoreButton);

const DEBOUNCE_DELAY = 300;