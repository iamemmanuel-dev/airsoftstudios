import airsoftData from '../Assets/Data.js'
import { re__render, Title } from '../Assets/Utilities.js'
import Gallery from './Gallery.js'

const Portfolio = {
  after__render() {
    document.querySelectorAll('.projects__link').forEach(links => {
      links.addEventListener('click', e => {
        e.preventDefault()
        const gallery__section = document.querySelector('#gallery__section')
        gallery__section.scrollIntoView({ behavior: 'smooth' })
        const scrollID = +e.currentTarget.dataset.id
        re__render(Gallery, scrollID)
      })
    })
    return `${Gallery.after__render()}`
  },
  render() {
    return `
      <section id='section__portfolio'>
        <div class='container'>
        ${Title(`our portfolio`)}
        <div class='port__row'>
        ${airsoftData
          .map((items, index) => {
            const { id, img, title, content } = items
            return `
               <article>
                <div class="port__col-1">
                  <img src='${img}' alt=${title}/>
                </div>
                <div class="port__col-2">
                  <h3 class='tertiary__heading'>${title}</h3>
                  <p>${content}</p>
                  <a href='#gallery__section' class='projects__link' data-id=${index}>see projects &DownArrow;</a>
                </div>
               </article>
          `
          })
          .join('')}
        </div>
        </div>
      </section>
      ${Gallery.render()}
    `
  },
}

export default Portfolio
