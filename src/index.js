import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
document.addEventListener("DOMContentLoaded", () => {
  

const breedSelectEl = document.querySelector(".breed-select");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");


showLoader();


fetchBreeds()
  .then((data) => {
    data.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelectEl.appendChild(option);
    });

    hideLoader();
   
  })
  .catch((error) => {
    showError();
  });

breedSelectEl.addEventListener("change", () => {
  const selectedBreedId = breedSelectEl.value;
  clearCatInfo();

  showLoader();
  

  fetchCatByBreed(selectedBreedId)
    .then((cat) => {
      const breed = cat.breeds && cat.breeds.length > 0 ? cat.breeds[0] : null;

      if (breed) {
        showCatInfo(cat);
      }
    })
    .catch((error) => {
      showError();
    });
});
  function showLoader() {
  loaderEl.style.display = "block";
  errorEl.style.display = "none";
  catInfo.style.display = "block";
}

function hideLoader() {
  loaderEl.style.display = "none";
}

function showError() {
  loaderEl.style.display = "none";
  errorEl.style.display = "block";
  errorEl.style.color = "red";
}

function clearCatInfo() {
  catInfo.innerHTML = "";
  errorEl.style.display = "none";
  showLoader();
  catInfo.style.display = "none";
}

function showCatInfo(cat) {
  const { url, breeds } = cat;
  const breed = breeds && breeds.length > 0 ? breeds[0] : null;

  if (breed) {
    const catHtml = `
      <img src="${url}">
      <div>
        <h3>${breed.name}</h3>
        <p>${breed.description}</p>
        <p><strong>Temperament: </strong>${breed.temperament}</p>
      </div>
    `;

    catInfo.innerHTML = catHtml.trim();

    hideLoader();
  }
}
});


