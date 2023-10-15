import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import Llama from '/llama2.png'

export default function Header() {
  return (
    <>
      <section className='header'>
        <Link to='/'>
        <img src={Llama} width='100' height='100' alt='logotype with the shape of a Llama' />
        </Link>
        <div className='navigation'>
          <HashLink smooth to="/#portfolio">Portfolio</HashLink>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </section>
    </>
  )
}