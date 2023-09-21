import type { NextPage } from 'next';
import { useState, useEffect } from 'react'

const Content: NextPage = () => {
  const [number, setNumber] = useState<number>(0)
  const bc = new BroadcastChannel('slide-page');
  bc.onmessage = (ev) => {
    setNumber(ev.data.number)
  }

  useEffect(() => {
  })

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
      <div className="docs-material-menu-button-flat-default-caption">{number}</div>
    </div>
  )
}

export default Content;