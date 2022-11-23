const dispCounter = (count) => {
  const movieUpdate = document.getElementById('menu-count');
  movieUpdate.innerHTML = `Menu(${count})`;
};
export default dispCounter;