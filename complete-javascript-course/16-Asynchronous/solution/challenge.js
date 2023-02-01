/* ------------------- Coding Challenge 1 ------------------- */
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

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

// const getJSON = (url, errorMessage = 'Something went wrong') => {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(errorMessage);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'Country was not found'
//   )
//     .then(data => {
//       const country = data[0];
//       renderCountry(country);

//       const neighbor = country.borders?.[0];
//       if (!neighbor) throw new Error('No neighbors found');
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbor}`,
//         'Country was not found'
//       );
//     })
//     .then(dataNeighbor => renderCountry(dataNeighbor[0], 'neighbour'))
//     .catch(err => console.error(err.message));
// };

// const whereAmI = (lat, lng) => {
//   getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`, 'Request Throttled!')
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => console.error(err));
// };

// btn.addEventListener('click', function () {
//   whereAmI(10.797056, 106.627072);
// });

/* ------------------- Coding Challenge 2 ------------------- */
const imagesContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imagesContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image could not be loaded'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

// let img;

// createImage('./img/img-1.jpg')
//   .then(res => {
//     img = res;
//     console.log('Image 1 was loaded');
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(res => {
//     img = res;
//     console.log('Image 2 was loaded');
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then(res => {
//     img = res;
//     console.log('Image 3 was loaded');
//     return wait(2);
//   })
//   .then(() => {
//     img.style.display = 'none';
//   })
//   .catch(err => {
//     console.error(err);
//   });

/* ------------------- Coding Challenge 3 ------------------- */
const loadNPause = async function () {
  try {
    let currentImage = await createImage('./img/img-1.jpg');
    console.log('Image 1 was loaded');
    await wait(2);
    currentImage.style.display = 'none';

    currentImage = await createImage('./img/img-2.jpg');
    console.log('Image 2 was loaded');
    await wait(2);
    currentImage.style.display = 'none';

    currentImage = await createImage('./img/img-3.jpg');
    console.log('Image 3 was loaded');
    await wait(2);
    currentImage.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEL = await Promise.all(imgs);
    console.log(imgsEL);

    imgsEL.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

// loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
