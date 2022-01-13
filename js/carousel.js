const images = document.querySelectorAll('.small-images img');
const bigImage = document.querySelector('.big-picture');

images.forEach((image) => {
  image.addEventListener('click', () => {
    bigImage.src = image.src;
  });
});