// import _ from 'lodash';
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
      <button class="like-btn"><i class="fa-regular fa-heart"></i></button>  
       <p>5 Likes</p>
      </span>
  </div>

  <div class="comment">
      <button type="button">Comments</button>
  </div>
  </div>`;
  divContainer.append(divElement);
};

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((response) => response.json())
  .then((response) => {
    const data = response.meals;
    data.forEach((item) => {
      renderContent(item);
    });
  });