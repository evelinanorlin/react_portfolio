import placeholder from '/portfolio_placeholder.png'

export const Portfolio = () => {
  return (
    <>
      <section className='portfolio container' id='portfolio'>
        <img src={placeholder} />
        <p className='italic'>React, SASS, node.js</p>
        <img src={placeholder} />
        <p className='italic'>React, SASS, node.js</p>
        <img src={placeholder} />
        <p className='italic'>React, SASS, node.js</p>
      </section>
    </>
  )
};