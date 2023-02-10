
// export default function fetchCountries(name) {
//     const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`;

//     return fetch(url).then((response) => response.json()).then(console.log);
// }

export const fetchCountries = name =>
  fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages
`).then(response => response.json()).then(({name}) => console.log(name));

