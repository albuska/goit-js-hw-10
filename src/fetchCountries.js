
export function fetchCountries(name) {
    const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`;

    return fetch(url).then((response) => response.json());
}

// export const fetchCountries = name => {
//   return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages
//   `).then(response => response.json());
// }
  

