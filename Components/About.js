import { Title } from '../Assets/Utilities.js'
import { activateDots, goToSlide } from '../Assets/Utilities.js'

const About = {
  after__render() {
    document
      .querySelector('.about__btn-container')
      .addEventListener('click', ({ target }) => {
        const id = target.dataset.id
        if (target.classList.contains('about__btn')) {
          document
            .querySelectorAll('.about__btn')
            .forEach(btn => btn.classList.remove('active__btn'))

          document
            .querySelectorAll('.about__article')
            .forEach(article => article.classList.remove('active__article'))

          document.querySelector('.about__content-btn').textContent = id

          target.classList.add('active__btn')
          document.getElementById(id).classList.add('active__article')
        }
      })

    const img__slides = document.querySelectorAll('.img__slide')
    let count = 0
    let max_count = img__slides.length - 1

    const dots__container = document.querySelector('.dots__container')
    img__slides.forEach((_, i) => {
      const html = `<div class='dots' data-slide=${i}></div>`
      dots__container.insertAdjacentHTML('beforeend', html)
    })

    document.querySelectorAll('.dots').forEach(dot => {
      dot.addEventListener('click', e => {
        clearInterval(interval)
        const { slide } = e.target.dataset
        goToSlide(slide)
        activateDots(slide)
      })
    })

    activateDots(0)

    const interval = setInterval(() => {
      goToSlide(count)
      activateDots(count)
      count++
      if (count > max_count) count = 0
    }, 3000)
  },
  render() {
    return `
      <section id='section__about'>
        <div class='container'>
          ${Title(`About airsoft`)}
          <div class='about__flex-container'>
            <div class='about__btn-container'>
              <button class='about__btn active__btn' data-id='core statement'>
                statement
              </button>
              <button class='about__btn' data-id='mission'>
                mission
              </button>
              <button class='about__btn' data-id='vision'>
                vision
              </button>
              <button class='about__btn' data-id='overview'>
                overview
              </button>
            </div>
            <div class='about__content'>
              <article id='overview' class='about__article'>
                <p>
                  The AirSoft studio is an Art design outsourcing studio based in London. It was founded by
                  creative minds who love to change the way people see art and
                  play games. We have a good working experience with people, we
                  make a good connection with their minds. We have a great
                  background in production, we approach art and development from
                  an eccentric perspective. We combine the rhythmic beauty of
                  nature with the competence of a production company to give you
                  a beautiful fast-paced result. We take our customer's ideas
                  and apply strategic creativity and a holistic deployment
                  approach to bring their ideas to life in a brilliant way.
                </p>
              </article>
              <article id='mission' class='about__article'>
                <p>
                  To make our clients happy and look forward to work
                  with us again by helping them to create consistent and
                  memorable creative art designs that will inspire millions
                  of people around the World.
                </p>
              </article>
              <article id='vision' class='about__article'>
              
                <p>
                  Our Vision is to become a Top-notch player in creative art designs, and to create content that will forever
                  be appreciated by our customers.
                </p>
              </article>
              <article id='core statement' class='about__article active__article'>
                <p>
                  Airsoft studio is an art studio based in London, We create new ways to develop and display the most brilliant Art designs to the world. We always go the extra mile to create exceptional game
                  and book projects, colorful arts recognized by highlighted top
                  tier companies.
                </p>
              </article>
              <button class='about__content-btn'>core statement</button>
            </div>
          </div>
          <div class='slider__container'>
            <div class='slider__parent'>
            
            <img
                src='../images/Artboard 9.png'
                alt='image slide one'
                class='img__slide'
                data-slide='0'
              />
              <img
                src='../images/childBook1.jfif'
                alt='image slide one'
                class='img__slide'
                data-slide='0'
              />
              <img
                src='../images/childBook2.jfif'
                alt='image slide two'
                class='img__slide'
                data-slide='1'
              />
              <img
                src='../images/childBook3.jfif'
                alt='image slide three'
                class='img__slide'
                data-slide='2'
              />
              <img
                src='../images/childBook4.jfif'
                alt='image slide four'
                class='img__slide'
                data-slide='3'
              />
              <img
                src='../images/childBook5.jfif'
                alt='image slide five'
                class='img__slide'
                data-slide='4'
              />
              <img
                src='../images/childBook6.jfif'
                alt='image slide six'
                class='img__slide'
                data-slide='5'
              />
              <img
                src='../images/childBook7.jfif'
                alt='image slide seven'
                class='img__slide'
                data-slide='6'
              />

              <img
                src='../images/Artboard 18.png'
                alt='image slide eight'
                class='img__slide'
                data-slide='7'
              />
            </div>
            <div class='dots__container'></div>
          </div>
        </div>
      </section>
    `
  },
}

export default About
