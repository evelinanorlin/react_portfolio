import Llama from '/llama2.png'

export default function Footer() {
  return (
      <footer className='footer'>
        <div className='footer-flex'>
          <div className='social-links'>
            <a href='https://github.com/evelinanorlin' target='_blank' className='social-link'><i className="fa-brands fa-github"></i></a>
            <a href='https://www.linkedin.com/in/evelinanorlin/' target='_blank' className='social-link'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href='mailto:norlin.evelina@gmail.com' className='social-link'><i className="fa-solid fa-envelope"></i></a>
          </div>
          <img src={Llama} width='100' height='100' alt='logotype with the shape of a Llama' />
        </div>
        <p>© 2021 <span className='bold'>EVELINANORLIN</span></p>
      </footer>
  )
}