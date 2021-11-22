import { galleryData } from '../Assets/Data.js'
import { re__render, Title } from '../Assets/Utilities.js'

let count = 0
let active = false

const Gallery = {
  after__render() {
    const nextBtn = document.querySelector('.nextBtn')
    const prevBtn = document.querySelector('.prevBtn')

    nextBtn.addEventListener('click', () => {
      if (count < galleryData.length - 1) {
        count++
        if (count === galleryData.length - 1) {
          active = true
        }
      }
      re__render(this)
    })

    prevBtn.addEventListener('click', () => {
      if (count > 0) {
        count--
      }
      if (count === 0) {
        active = false
      }
      re__render(this)
    })
  },
  render(scrollID) {
    const [title, ...rest] = galleryData[scrollID || count].data
    return `<section id='gallery__section'>
        <div class="container gallery__content">
          <div class="gallery__container-head">
            <div class="gallery__container-info">
              <h3 class='tertiary__heading'>Airsoft Projects</h3>
              <p>Our set of completed projects by highly trained professionals</p>
            </div>
            <div class="galley__icons-container">
            <button class="${
              active
                ? 'gallery__icon prevBtn active__icon-btn'
                : 'gallery__icon prevBtn'
            }">&larrfs;</button>
              <button class="${
                active
                  ? 'gallery__icon nextBtn'
                  : 'gallery__icon nextBtn active__icon-btn'
              }">&rarrfs;</button>
            </div>
          </div>
          <h2>${Title(`${title}`)}</h2>
          <div class="gallery">
            <div class="gallery__row">
            ${rest.map(img => `<img src='${img}' alt=${title}/>`).join('')}
            </div>
          </div>
        </div>
    </section>`
  },
}

export default Gallery
