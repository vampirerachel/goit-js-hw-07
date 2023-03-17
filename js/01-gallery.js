import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerEl = document.querySelector('.gallery')

galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('class', "gallery__item");
    div.innerHTML = `
<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    /></a> `
    containerEl.append(div)
    div.addEventListener('click', (e) => {
    e.preventDefault()
    let instance = basicLightbox.create(`
    <img src= "${item.original}">`)
    instance.show()
    instance = basicLightbox.create(`
  <img src='${e.target.src}'/>`);
        instance.show();
    })
})
