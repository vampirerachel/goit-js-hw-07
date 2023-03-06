import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const containerEl = document.querySelector('.gallery')

galleryItems.forEach(item => {
    const aTag = document.createElement('a');
    aTag.classList.add('gallery__item')
    aTag.setAttribute("href", item.original)
    aTag.innerHTML = `<img class="gallery__image" src="${item.preview}" alt="${item.description}" />`

    containerEl.append(aTag)
    
    aTag.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e)
        var lightbox = new SimpleLightbox('.gallery a', { 
            captionsData: 'alt',
            captionDelay: 250,

});
    })
})



