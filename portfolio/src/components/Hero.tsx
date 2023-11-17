import { SlideFromLeft } from "../animations/animations";


export default function Hero() {
    return (
      <SlideFromLeft>
        <div className="square">
          <h3 className='italic'>Hi, I'm</h3>
          <h1>Evelina</h1>
          <h4>Freelancing <span className="thin italic">web designer</span> and 
          <span className="thin italic">front end developer</span> student based in Gothenburg, Sweden 💫</h4>
        </div>
      </SlideFromLeft>
    )
}