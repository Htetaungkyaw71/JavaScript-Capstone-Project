import comment from './modules/comment.js';
import festus from './img/festus.jpg';
import htet from './img/htet.jpg';
import logo from './img/seafood-log.jpg';
import { like, renderLike } from './modules/like.js';
import dispCounter from './modules/itemCount.js';

const mainapi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const dialog = document.getElementById('dialog');
const divContainer = document.querySelector('.row-one');

const renderContent = (item) => {
  const divElement = document.createElement('div');
  divElement.className = 'col-one';
  divElement.innerHTML = `<div class="item-wrapper">
  <div class="food-img">
      <img src="${item.strMealThumb}" alt="" class="food-img1"> 
  </div>
  <div class="fname-likes">
      <h2>${item.strMeal}</h2>
     <span class="likes">
     <p class= "num-likes" id = "likes${item.idMeal}" > </p>
      <button class="like-btn" id= "${item.idMeal}">
      <i class="fa-regular fa-heart"></i>
      </button>  

      </span>
  </div>
  <div class="comment">
      <button type="button" class="btn" id="${item.idMeal}">View</button>
  </div>
  </div>`;
  divContainer.append(divElement);
};

document.addEventListener('DOMContentLoaded', async () => {
  dialog.classList.add('hidden');
  fetch(mainapi)
    .then((response) => response.json())
    .then((response) => {
      const data = response.meals;
      const list = data.slice(1, 7);
      dispCounter(list.length);

      list.forEach((item) => {
        renderContent(item);
        comment();
        renderLike(item.idMeal);
      });
      like();
    });

  const img = document.createElement('img');
  const a = document.createElement('a');
  a.href = 'https://github.com/Htetaungkyaw71';
  img.className = 'author';
  img.src = htet;
  a.append(img);

  const img1 = document.createElement('img');
  const a1 = document.createElement('a');
  a1.href = 'https://github.com/Enning94';
  img1.className = 'author';
  img1.src = festus;
  a1.append(img1);

  document.querySelector('.author-img').append(a);
  document.querySelector('.author-img').append(a1);

  document.querySelector('.icon').href = logo;
});
