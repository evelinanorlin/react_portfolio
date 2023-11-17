
import { SlideFromBottom } from '../animations/animations';
import { portfolioItems } from '../data/portfolioItems';

export const Portfolio = () => {


  const itemsHtml = portfolioItems.map((item, index) => {
    return (
      <SlideFromBottom key={index}>
        <div 
          className='portfolio-item' 
          key={index}
        >
          <div className='img-container'>
            <a href={item.link} target='_blank' className='img-link'><img src={item.image} alt='portfolio item' /></a>
            <div className='img-overlay'>
              <div className='img-text'>
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.type}</h3>
                  <div className='porfolio-links'>
                    {item.link ? <a href={item.link} target='_blank' rel='noreferrer' className='site-link'>Visit site 👀</a> : null}
                    {item.gitHub ? <a href={item.gitHub} target='_blank' rel='noreferrer' className='site-link'>Checkout gitHub 🐱</a> : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className='tech-stack'>
            {item.techStack.map((tech, index) => {
                return (
                  <span key={index} className='tech-item gradient-border'>{tech}</span>
                )
            })}
            {item.gitHub ? <a href={item.gitHub} target='_blank' rel='noreferrer' className='rainbow-text'><i className="fa-brands fa-github"></i></a> : null}
            </div>
        </div>

      </SlideFromBottom>
    )
  })
  return (
    <>
      <section className='portfolio container' id='portfolio'>
        {itemsHtml}
      </section>
    </>
  )
};