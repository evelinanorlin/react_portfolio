import { portfolioItems } from '../data/portfolioItems';

export const Portfolio = () => {
  const itemsHtml = portfolioItems.map((item, index) => {
    return (
    <div className='portfolio-item' key={index}>
      <img src={item.image} alt='portfolio item' />
        <div className='tech-stack'>
         {item.techStack.map((tech, index) => {
            return (
              <span key={index} className='tech-item gradient-border'>{tech}</span>
            )
         })}
        {item.gitHub ? <a href={item.gitHub} target='_blank' rel='noreferrer' className='rainbow-text'><i className="fa-brands fa-github"></i></a> : null}
        </div>
    </div>
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