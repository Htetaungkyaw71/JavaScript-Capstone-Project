// import _ from 'lodash';
import comment from './modules/comment.js';
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
      <button class="like-btn" id= "${item.idMeal}"><i class="fa-regular fa-heart"></i></button>  
       <p class= "num-likes" id = "likes${item.idMeal}" > </p>
      </span>
  </div>

  <div class="comment">
      <button type="button" class="btn" id="${item.idMeal}">Comments</button>
  </div>
  </div>`;
  divContainer.append(divElement);
};

// View detail
document.addEventListener('DOMContentLoaded', async () => {
  dialog.classList.add('hidden');
  fetch(mainapi)
    .then((response) => response.json())
    .then((response) => {
      const data = response.meals;
      const list = data.slice(0, 6);
      dispCounter(list.length);

      list.forEach((item) => {
        renderContent(item);
        comment();
        renderLike(item.idMeal);
      });
      like();
    });
});
