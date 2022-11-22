/* eslint-disable camelcase */
import { fetchDataDeatil, fetchComment, postComment } from './api.js';

const dialog = document.getElementById('dialog');

// For Date
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}

if (mm < 10) {
  mm = `0${mm}`;
}
today = `${yyyy}-${mm}-${dd}`;
// For Date

const renderDetail = (data) => {
  const div = document.createElement('div');
  div.innerHTML = `
        <div id="detail">
        <div class="closeIcon">
            <i class="fa-solid fa-xmark" id="close"></i> 
        </div>
  
        <div class="row">
        <div class="col">
            <img src="${data.strMealThumb}" class="detailImg">
                <h3 class="detailHeading">${data.strMeal}</h3>
                <p class="detailText">
                    ${data.strInstructions}
                </p>
        </div>
        <div class="col">
            <form action="" id="commentForm">
                <h2>Add a comment</h2>
                <input type="text" placeholder="your name" name="name" required>
                <br>
                <textarea cols="23" rows="5" placeholder="your insights" name="insight" required></textarea>
                <br>
                <input type="submit" value="submit">
            </form>
            <hr>
            <div>
                <h2 class="comments">Comments</h2>
                <ul class="commentList">
                
                </ul>
            <div>
        
  
        </div>
    </div>
         
        </div>
        `;
  return div;
};

const renderComment = ({ creation_date, username, comment }) => {
  const ul = document.querySelector('.commentList');
  if (ul.textContent === 'No Comments') {
    ul.innerHTML = '';
  }
  const li = document.createElement('li');
  li.innerHTML = `
    <p>
    ${creation_date} ${username}:${comment}
    </p>
    `;
  ul.appendChild(li);
};

const closefunc = () => {
  document.querySelectorAll('#close').forEach((btn) => {
    btn.onclick = () => {
      dialog.classList.add('hidden');
      document.body.style.overflow = 'scroll';
    };
  });
};

const addComment = (id) => {
  const form = document.getElementById('commentForm');
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const insight = e.target.insight.value;
    const data = {
      item_id: id,
      username: name,
      comment: insight,
    };
    postComment(data);
    renderComment({ ...data, creation_date: today });
    e.target.name.value = '';
    e.target.insight.value = '';
  };
};

export default () => {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.onclick = () => {
      dialog.classList.remove('hidden');
      dialog.innerHTML = '';
      fetchDataDeatil(btn.id).then((data) => {
        document.body.style.overflow = 'hidden';
        dialog.append(renderDetail(data));
        closefunc();
        addComment(btn.id);
        fetchComment(btn.id).then((data) => {
          if (data) {
            data.forEach((item) => renderComment(item));
          } else {
            document.querySelector('.commentList').innerHTML = '<li>No Comments</li>';
          }
        });
      });
    };
  });
};
