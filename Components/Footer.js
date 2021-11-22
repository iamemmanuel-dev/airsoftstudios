const Footer = {
  render() {
    return `
      <footer class='global__footer'>
        <div class='footer__row'>
          <div class="footer__col-1">
            <h3>company info</h3>
            <span class='footer__underline'></span>
            <p>AirSoft studio is a Creative Art Studio based in London. It was founded by creative minds who love to change the way people see art, by sourcing the brightest global talent in art, marketing and design, equipping them with industry-leading technologies and tools.</p>
          </div>
          <div class="footer__col-2">
            <h3>useful links</h3>
            <span class='footer__underline'></span>
            <ul>
              <li class='footer__navbar-items'>
                <a href='#section__portfolio' class='footer__links'>
                  our portfolio
                </a>
              </li>

              <li class='footer__navbar-items'>
                <a href='#section__about' class='footer__links'>
                  about us
                </a>
              </li>

              <li class='footer__navbar-items'>
                <a href='#contact__section' class='footer__links'>
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__col-3">
            <h3>Contact</h3>
            <span class='footer__underline'></span>

            <div class="footer__contactInfo">
              <div>
                <i class='fas fa-home'></i>
                <p>OFFICE 56, 182-184 HIGH STREET NORTH, EAST HAM, LONDON E6 2JA</p>
              </div>

              <div>
                <i class='fas fa-envelope'></i>
                <p>Airsoftstudios01@gmail.com</p>
              </div>

              <div>
                <i class='fas fa-phone'></i>
                <p>+44 7830 312045</p>
              </div>
              
            </div>
          </div>
        </div>
        <div class="copyRightSection">
          <p> &copy; ${new Date().getFullYear()} ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    `
  },
}

export default Footer

// samolagundoye1
//samuelolagundoyeairsoft - namecheap c-panel passsword
//airstubg - namecheap c-panel username
