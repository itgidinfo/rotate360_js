const images = [
    'ipod-44.jpg',
    'ipod-45.jpg',
    'ipod-46.jpg',
    'ipod-47.jpg',
    'ipod-48.jpg',
    'ipod-49.jpg',
    'ipod-50.jpg',
    'ipod-51.jpg',
    'ipod-52.jpg',
    'ipod-53.jpg',
    'ipod-54.jpg',
    'ipod-55.jpg',
    'ipod-56.jpg',
    'ipod-57.jpg',
    'ipod-58.jpg',
    'ipod-59.jpg',
    'ipod-60.jpg',
    'ipod-61.jpg',
    'ipod-62.jpg',
    'ipod-63.jpg',
    'ipod-64.jpg',
    'ipod-65.jpg',
    'ipod-66.jpg',
    'ipod-67.jpg',
    'ipod-68.jpg',
    'ipod-69.jpg',
    'ipod-70.jpg',
    'ipod-71.jpg',
    'ipod-72.jpg',
];

const img = document.querySelector('img');
const range = document.querySelector('input[type="range"]');
range.value = 0;
range.max = images.length - 1;
img.src = './images/' + images[0];

range.oninput = function () {
    img.src = './images/' + images[range.value];
}