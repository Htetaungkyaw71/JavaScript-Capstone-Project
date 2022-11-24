import { getLikes, postLike } from './api.js';

// Post like function
export const like = async () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((icon) => {
    icon.addEventListener('click', async () => {
      const { id } = icon;
      postLike(id);
      let count = +icon.previousElementSibling.innerHTML;
      count += 1;
      icon.previousElementSibling.innerHTML = count;
    });
  });
};

// render like function
export const renderLike = async (id) => {
  const likes = await getLikes();
  likes.forEach((like) => {
    if (like.item_id === id) {
      document.getElementById(`likes${id}`).innerHTML = like.likes;
    }
  });
  document.querySelectorAll('.num-likes').forEach((element) => {
    if (element.innerHTML === ' ') {
      element.innerHTML = 0;
    }
  });
};
