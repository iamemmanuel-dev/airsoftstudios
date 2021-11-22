import About from '../Components/About.js'
import Contact from '../Components/Contact.js'
import Hero from '../Components/Hero.js'
import Portfolio from '../Components/Portfolio.js'
import Footer from '../Components/Footer.js'

const HomePage = {
  after__render() {
    return `
    ${Hero.after__render()}
    ${About.after__render()}
    ${Portfolio.after__render()}
    
    `
  },
  render() {
    return `
    ${Hero.render()}
    ${About.render()}
    ${Portfolio.render()}
    ${Contact.render()}
    ${Footer.render()}
    `
  },
}

export default HomePage
