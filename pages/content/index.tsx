import type { NextPage } from 'next';

const Content: NextPage = () => {

  return(
    <div className='punch-viewer-content'>
      <div className='slide-content'>
        <div className='punch-viewer-page-wrapper-container'>
          <div className='punch-viewer-page-wrapper-container'>
            ここにスライドコンテンツを表示
          </div>
          <div className='punch-viewer-questions-link-bar-container'>
            質問を投稿: localhost:3000/usertool
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;