'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}M people</p>
//           <p class="country__row"><span>🗣️</span>${
//             Object.values(data.languages)[0]
//           }</p>
//           <p class="country__row"><span>💰</span>${
//             Object.values(data.currencies)[0].name
//           }</p>
//         </div>
//       </article>
//       `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('vietnam');
// getCountryData('portugal');
// getCountryData('usa');

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${
//         Object.values(data.languages)[0]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.values(data.currencies)[0].name
//       }</p>
//     </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);

//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbors = function (country) {
//   // AJAX call current country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render current country
//     renderCountry(data);

//     // Get neighbor countries
//     const neighbor = data.borders?.[0];

//     if (!neighbor) return;

//     // AJAX call neighbor country
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       // Render neighbor country
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbors('vietnam');

// Promise and fetch API
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const getJSON = (url, errorMessage = 'Something went wrong') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMessage);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country was not found'
  )
    .then(data => {
      const country = data[0];
      renderCountry(country);

      const neighbor = country.borders?.[0];
      if (!neighbor) throw new Error('No neighbors found');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        'Country was not found'
      );
    })
    .then(dataNeighbor => renderCountry(dataNeighbor[0], 'neighbour'))
    .catch(err => console.error(err.message));
};

btn.addEventListener('click', function () {
  getCountryData('vietnam');
});

/* ------------------- Event Loop ------------------- */
// console.log('Test start');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

/* ------------------- Promise ------------------- */
// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('Lottery Draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WINNNN 😍😍😍');
//     } else {
//       reject('You lost your money 💩💩💩');
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisify setTimeout
// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 1 second');
//   });

// const getPosition = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// const whereAmI = () => {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return getJSON(
//         `https://geocode.xyz/${lat},${lng}?geoit=json`,
//         'Request Throttled!'
//       );
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(err));
// };

// btn.addEventListener('click', function () {
//   whereAmI();
// });

/* ------------------- Async/Await ------------------- */
// const getPosition = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

// const whereAmI = async function () {
//   try {
//     // Reverse Geocoding
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('There is problem in getting Geolocation');
//     const dataGeo = await resGeo.json();

//     // Render country
//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Country was not found');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (error) {
//     console.error(error.message);
//     throw error;
//   }
// };

// const city = whereAmI();
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.log(err.message));
// console.log('FIRST');

/* ------------------- More about Promise ------------------- */
// Promise.all
const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ]);
    console.log(data);
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

// get3Countries('vietnam', 'thailand', 'laos');

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/germany`),
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/vietnam`)
//   ]);
//   console.log(res[0]);
// })();

const timeout = function (second) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, second * 1000);
  });
};

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/vietnam`),
//   timeout(2)
// ])
//   .then(data => console.log(data[0]))
//   .catch(err => console.error(err));

// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Success'),
//   Promise.reject('Error')
// ]).then(res => console.log(res));

// Promise.any
// Promise.any([
//   Promise.resolve('First Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Second Success'),
//   Promise.reject('Error')
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
