import placeholder from '/portfolio_placeholder.png'

export const Portfolio = () => {
  return (
    <>
      <section className='portfolio container' id='portfolio'>
        <div>
          <img src={placeholder} />
          <p className='italic'>React, SASS, node.js</p>
        </div>
        <div>
          <img src={placeholder} />
          <p className='italic'>React, SASS, node.js</p>
        </div>
        <div>
          <img src={placeholder} />
          <p className='italic'>React, SASS, node.js</p>
        </div>
        <div>
          <img src={placeholder} />
          <p className='italic'>React, SASS, node.js</p>
        </div>
      </section>
    </>
  )
};