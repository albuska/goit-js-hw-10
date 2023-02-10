import './css/styles.css';
// const debounce = require('lodash.debounce');
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries'; 


const DEBOUNCE_DELAY = 300;

const inputRef = document.getElementById('search-box');
const listRef = document.querySelector('.country-list');
const containerRef = document.querySelector('.country-info');

// inputRef.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

inputRef.addEventListener('input', fetchCountries);

// fetchCountries().then(countries => console.log(countries)).catch(onFetchError);

// fetchCountries().then(name => console.log(name)) 
// inputRef.addEventListener('input', handleInputValue); 

// function handleInputValue(event) {
// const inputValue = event.target.value.trim(); 
// console.log("🚀 ~ handleInputValue ~ inputValue", inputValue)

// onFetchError(inputValue).then((countries) => console.log(countries)).catch(onFetchError);
// }



// if(a > 10) {
//     Notiflix.Notify.warning("Too many matches found. Please enter a more specific name.");
// }

// if(a > 2 || a < 10) {
//     Notiflix.Notify.warning("Too many matches found. Please enter a more specific name.");
// }

// if(a === 1) {

// }


// ******************************

// if(b) {
// // error 404
// } else {
//     
// }



// function onRenderContainerOfCountry(item) {
// const markup = item.map(({name, capital, flags, population, languages}) => {
//     return `<div><img src=${flags.svg}/><h1>${name}</h1><p>${capital}</p>
//     <p>${population}</p><p>${languages}</p></div>`
// }).join(""); 
// containerRef.insertAdjacentHTML('beforeend', markup); 
// }

// function onRenderListCountries(item) {
// const markup = item.map(({flags, name}) => {
//     return `<li><img src=${flags.svg}/><p>${name}</p></li>`  
// }).join(""); 
// listRef.insertAdjacentHTML('beforeend', markup); 
// }

function onFetchError() {
    Notiflix.Notify.failure("Oops, there is no country with that name");
}