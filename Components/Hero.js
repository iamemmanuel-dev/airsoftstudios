const Hero = {
  after__render() {
    const closeBtn = document.querySelector('.close__links-container-btn')
    const openBtn = document.querySelector('.icon_container')
    const links_container = document.querySelector('.navbar__links--container')

    openBtn.addEventListener('click', () => {
      links_container.classList.add('show__navbar__container')
    })

    closeBtn.addEventListener('click', () => {
      links_container.classList.remove('show__navbar__container')
    })
  },
  render() {
    return `
      <header class='main__header'>
        <div class='container'>
          <nav class='navbar'>
            <div class='navbar__center'>
              <div class='navbar__header'>
                <img src='logo.png' alt='airsoft logo' class='airsoft__logo' />
                <div class='icon_container'>
                  <span class='navbar__icon'></span>
                </div>
              </div>
              <div class='navbar__links--container'>
                <ul class='navbar__lists'>
                  <li class='navbar__items u-padding-bottom-medium'>
                    <a href='#section__portfolio' class='navbar__links'>
                      our portfolio
                    </a>
                  </li>

                  <li class='navbar__items u-padding-bottom-medium'>
                    <a href='#section__about' class='navbar__links'>
                      about us
                    </a>
                  </li>

                  <li class='navbar__items'>
                    <a href='#contact__section' class='navbar__links'>
                      contact us
                    </a>
                  </li>
                </ul>
                <span class='close__links-container-btn'>&times;</span>
                <a href='#contact__section' class='navbar__links-btn'>
                  contact us
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div class='main__header-center'>
          <h1 class='primary__heading'>
            <span class='primary__heading-main'><img src="logo.png"/></span>
            <span class='primary__heading-sub'>
             <span class='heading__text'>Discover The World's Best Creative Art </span>
            </span>
          </h1>
          <a href='#section__portfolio' class='main__header-btn'>
            Explore
          </a>
        </div>
      </header>
    `
  },
}

export default Hero
