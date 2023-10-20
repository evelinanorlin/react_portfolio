import { Link } from 'react-router-dom'
import evelina from '/evelina_norlin.jpg'
import cv from '/cv_Evelina_Norlin_eng.pdf'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <section className='about container'>
        <div className='flex'>
          <div>
              <h4 className='italic ingress'>Hey there! 👋 
              I am Evelina Norlin, a dedicated adventure enthusiast with a passion for crafting 
              captivating digital experiences.  You could say I'm the kind of person who thrives 
              on the perfect blend of well-structured code and eye-catching, user-friendly design.  </h4>
              </div>
              <div className='image-block'>
                <div className='gradient-square'></div>
                <img src={evelina} alt='Evelina Norlin' />
              </div>
            </div>
            <div className='about-text'>
            <p>Currently, I'm on an exciting journey to level up my skills as a front-end developer at Medieinstitutet. 
              I'm not stopping there though – I'm also diving headfirst into graphic design and UX courses to 
              finesse my design chops and learn how to craft seriously kick-ass user interfaces. 
              Because I genuinely believe that a killer website can make a world of difference.</p>

            <p>But my digital adventures are just one part of the story. 
              You see, I also have a gig in the yoga and health space. And here's the fun part: 
              I'm thrilled to merge my passion for creativity with web development and design, helping businesses 
              rock their online presence. I'm all about dreaming up cool ideas and turning them into a digital reality.</p>

            <p>When I'm not glued to my computer, you'll find me seeking tranquility 
              in a yoga studio, scaling climbing walls, or or out on the open waters, sailing and basking in the beauty of the ocean.</p>

            <p className='italic'>So, if you're in search of a website that's not just pixels and code but a true reflection of your essence and a magnet for your audience, 
            <Link to='/contact' className='thin'>let's team up and turn that vision into a digital masterpiece.</Link> I'm excited about the possibility of creating something amazing together.</p>

            <p>Want the formal version? <a href={cv} className='thin' target='_blank'>Take a look at my CV 👀</a></p>

            </div>
        <div className='facts'>
          <h2>A few random facts about me  🪩 </h2>
          <p className='fact-list'>
          <span className='bold'>Early bird</span> // Night owl  <br />
          Dressing up // <span className='bold'>Dressing down</span><br />
          The beach // <span className='bold'>The mountains</span><br />
          Shoes // <span className='bold'>Bare feet</span><br />
          The city // <span className='bold'>The country</span><br />
          Inside // <span className='bold'>Outside</span><br />
          <span className='bold'>A free house</span> // A free trip around the world<br />
          <span className='bold'>Sunrise</span>// Sunset<br />
          Hair done // <span className='bold'>Messy bun</span>
          </p>
        </div>       
      </section>
      <Footer />    
    </>
  )
}