'use strict'
const scrollBtn = document.querySelector('.scrollBtn')
import HomePage from './Pages/Home.js'
const app = document.querySelector('#app')

const handleScroll = () => {
  const viewHeight = window.pageYOffset
  if (viewHeight > 900) {
    scrollBtn.classList.add('showScrollBtn')
  } else {
    scrollBtn.classList.remove('showScrollBtn')
  }
}

scrollBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav')
  nav.scrollIntoView({ behavior: 'smooth' })
})

window.addEventListener('load', () => {
  app.innerHTML = HomePage.render()
  HomePage.after__render()

  const all__sections = document.querySelectorAll('section')
  const links = document.querySelectorAll('a:not(.projects__link)')
  const links_container = document.querySelector('.navbar__links--container')

  links.forEach(link => {
    const id = link.getAttribute('href')
    link.addEventListener('click', e => {
      e.preventDefault()
      const section = document.querySelector(id)
      section.scrollIntoView({ behavior: 'smooth' })
      if (links_container.classList.contains('show__navbar__container')) {
        links_container.classList.remove('show__navbar__container')
      }
    })
  })

  const observer = new IntersectionObserver(
    (entries, observer) => {
      const [entry] = entries
      if (!entry.isIntersecting) return
      entry.target.classList.remove('hidden')
      observer.unobserve(entry.target)
    },
    { root: null, threshold: 0.05 }
  )

  all__sections.forEach(sections => {
    sections.classList.add('hidden')
    observer.observe(sections)
  })
})

window.addEventListener('scroll', handleScroll)
