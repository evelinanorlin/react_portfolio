import { Link } from 'react-router-dom'
import evelina from '/evelina_norlin.jpg'
import cv from '/cv_Evelina_Norlin_eng.pdf'

export default function About() {
  return (
    <>
      <section className='about container'>
        <div className='flex'>
          <div>
            <div className='gradient-square'></div>
            <img src={evelina} alt='Evelina Norlin' />
          </div>
          <h4 className='italic ingress'>Hey there! 👋 
          I'm an adventure enthusiast with a creative spirit, 
          always excited about crafting amazing digital experiences. 
          Well-structured code and eye-catching, user-friendly design are my jam!</h4>

          <p>Currently, I'm on a journey to level up my skills as a front-end developer 
            at Medieinstitutet. Alongside, I'm diving into graphic design and UX courses 
            to finesse my design chops and create kick-ass user interfaces. 
            I truly believe that a killer website can make a real difference.</p>

          <p>Besides my digital adventures, I also run a gig in the yoga and 
            health space. And now, I'm super stoked to blend my passion for 
            creativity with web development and design, helping businesses rock 
            their online presence. I love dreaming up cool ideas and turning 
            them into a digital reality.</p>

          <p>When I'm not glued to my computer, you'll find me seeking tranquility 
            in a yoga studio, scaling climbing walls, or simply enjoying the beauty of 
            the ocean.</p>
          
          <p className='italic'>If you're in search of a website that mirrors 
          your essence and captivates your audience, <Link to='/contact' className='thin'>let's team up and bring that vision to life</Link>! 
          Looking forward to creating something amazing together.</p>

          <p>Want the formal version? <a href={cv} className='thin' target='_blank'>Take a look at my CV</a></p>
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
    </>
  )
}