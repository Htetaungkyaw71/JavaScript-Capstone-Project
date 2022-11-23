/* eslint-disable no-console */
const detailapi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const invo = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const key = 'fPYwNXOHCbzOe8GPrdwI';

export const fetchDataDeatil = async (id) => {
  const response = await fetch(`${detailapi}${id}`);
  const data = await response.json();
  return data.meals[0];
};

export const fetchComment = async (id) => {
  const response = await fetch(`${invo}${key}/comments?item_id=${id}`);
  if (response.status !== 200) {
    console.clear();
    return null;
  }
  const data = await response.json();
  return data;
};

export const postComment = async (data) => {
  const response = await fetch(`${invo}${key}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },

  });
  if (response.status !== 201) {
    return null;
  }
  return true;
};


export const postLike = async (id) =>{
const response = await fetch(`${invo}${key}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'item_id':id,
        }),
      });
    };


   export const getLikes = async () => {
      const response = await fetch(`${invo}${key}/likes`)
      const data = await response.json();
      return data;
        
    };