export const Title = title => {
  return `
    <div class='title'>
      <h2 class='secondary__heading'>${title}</h2>
    </div>
  `
}

export const goToSlide = count => {
  document
    .querySelectorAll('.img__slide')
    .forEach(
      (slides, i) =>
        (slides.style.transform = `translateX(${100 * (i - count)}%)`)
    )
}

export const activateDots = count => {
  document
    .querySelectorAll('.dots')
    .forEach(dot => dot.classList.remove('dot__active'))

  document
    .querySelector(`.dots[data-slide='${count}']`)
    .classList.add('dot__active')
}

export const re__render = (el, id) => {
  document.querySelector('#gallery__section').innerHTML = el.render(id)
  el.after__render(id)
}
