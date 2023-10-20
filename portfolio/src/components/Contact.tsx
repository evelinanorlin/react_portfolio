import flamingo from '/flamingo.png'

export default function Contact() {
  return (
    <>
      <section id='contact' className='contact'>
        <div className='contact-info'>
          <h4 className="ingress"><span className='italic'> 
          Want to reach out? You find me at <a href='' target='_blank'>linkedIn</a> or <a href='' target='_blank'>GitHub</a>, 
            or send an e-mail to <a href='mailto:norlin.evelina@gmail.com'>norlin.evelina@gmail.com</a></span> 🌝</h4>
            <a href='https://github.com/evelinanorlin' target='_blank' className='social-link'><i className="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/evelinanorlin/' target='_blank' className='social-link'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='mailto:norlin.evelina@gmail.com' target='_blank' className='social-link'><i className="fa-solid fa-envelope"></i></a>
        </div>
        <img src={flamingo} alt='flamingo' className='flamingo' height='500' width='500' />
      </section>
    </>
  )
}