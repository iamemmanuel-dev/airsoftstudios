import { Title } from '../Assets/Utilities.js'

const Contact = {
  render() {
    return `
      <section id='contact__section'>
      <div class="contact__head">
      ${Title(`contact us`)}
      <h3>
      AirSoft is open to everyone who wants to work with us. Get in touch with us today to bring your dreams into reality.</h3>
      </div>
        <div class='contact__center container'>
          <div class='contact__col-1'>
            <h3 class='tertiary__heading'>Get in touch with us today</h3>
            <form>
              <div class='form__group'>
                <input type='text' id='firstName' placeholder='firstname' class='form__input' />
                <label htmlFor='firstName'>Firstname</label>
              </div>

              <div class='form__group'>
                <input type='email' id='email' placeholder='email' class='form__input' />
                <label htmlFor='email'>Email</label>
              </div>
              <div class='form__group'>
                <textarea name='msg' id='msg' cols='5' rows='5'></textarea>
              </div>
              <button class='form__btn'>send</button>
            </form>
          </div>
        </div>
      </section>
    `
  },
}

export default Contact
