const form = document.querySelector('.form');
const inputImages = document.querySelector('#myFileInput');
const previewImg = document.querySelector('#preview');

form.addEventListener('change', () => {
    const imageURL = URL.createObjectURL(inputImages.files[0]);

    renderPreviewImg(imageURL);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const reader = new FileReader();

    reader.readAsDataURL(inputImages.files[0]);

    reader.addEventListener('load', () => {
        localStorage.setItem('image', reader.result);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageLS = localStorage.getItem('image');

    imageLS ? previewImg.setAttribute('src', imageLS) : '';
});

const renderPreviewImg = (imageURL) => {
    previewImg.setAttribute('src', imageURL);
}