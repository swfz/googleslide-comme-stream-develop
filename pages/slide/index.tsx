import type { NextPage } from 'next';

const Slide: NextPage = () => {

  return(
    <div className="slide-container">
      <div>Slide</div>
      <iframe className='punch-present-iframe' src="/content">
      </iframe>
    </div>
  )
}

export default Slide;