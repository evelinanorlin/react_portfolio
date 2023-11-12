import { Link } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
    <section className="home container">
      <Hero />
    </section>
      <Portfolio />
      <section className='container home-messages'>
        <p className='italic'>Curious? Take a look at my  
        <a className='thin' href='https://github.com/evelinanorlin' target='_blank'> github profile </a>  
        for more projects 👀</p>
        <p className='italic'>Psssst.... I’m currently searching for fun creative projects to expand my portfolio. 
        Are you in need of a new website? ✨  
        <Link to='/contact' className='thin'>Let´s get in touch</Link>
        , to see if we can work together ✨</p>
      </section>
      <Footer />
    </>
  )
}