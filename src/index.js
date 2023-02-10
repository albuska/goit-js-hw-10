import './css/styles.css';
// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries }  from './fetchCountries'; 


const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
const listRef = document.querySelector('.country-list');
const containerRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(handleInputValue, DEBOUNCE_DELAY));

if(inputRef === "") {
    onClear(); 
}

function handleInputValue(event) {
const inputValue = event.target.value.trim(); 

if(inputValue.length === 1) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
} else  if(inputValue.length === 2) {
    fetchCountries(inputValue).then(onRenderListCountries).catch(onFetchError);
} else  if(inputValue.length >= 3) {
    fetchCountries(inputValue).then(onRenderContainerOfCountry).catch(onFetchError);  
} else if(inputValue === '') {
    onClear();   
    }
}

function onRenderContainerOfCountry(countries) {
    onClear(); 
const markup = countries.map(({name, capital, flag, population, languages}) => {
    const nameLanguages = languages.map(language => language.name);

    return `<div><div class="container-title"><img src='${flag}' width="50" height="30"/><h1 class="title"><b>${name}</b></h1></div><p class="text"><b>Capital:</b> ${capital}</p>
    <p class="text"><b>Population:</b> ${population}</p><p class="text"><b>Languages:</b> ${nameLanguages.join(", ")}</p></div>`
}).join(""); 
containerRef.insertAdjacentHTML('beforeend', markup);    
    
}

function onRenderListCountries(countries) {
    onClear();
const markup = countries.map(({flag, name}) => {
    return `<li class="list container-text"><img src='${flag}' width="50" height="30"/><p class="text">${name}</p></li>`  
}).join(""); 
listRef.insertAdjacentHTML('beforeend', markup);  

}

function onFetchError() {
    Notiflix.Notify.failure("Oops, there is no country with that name");
  }

function onClear() {
listRef.innerHTML = ""; 
containerRef.innerHTML = ""; 
}

// function onClearList() { 
// listRef.innerHTML = ""; 
// }

// function onClearContainer() {
// containerRef.innerHTML = "";   
// }