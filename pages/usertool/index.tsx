import type { NextPage } from 'next';
import { useState, ChangeEvent } from 'react'

const Usertool: NextPage = () => {
  const [comments, setComments] = useState<string[]>([])
  const [input, setInput] = useState<string>()

  const handleCommentChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = (event) => {
    setComments((prev) => [...prev, input] )
  }

  return (
    <>
      <input type="text" onChange={handleCommentChange} />
      <button onClick={handleClick}>Submit</button>

      <div className='punch-viewer-speaker-questions'>
        {comments.map((comment, i) => {
          return (
            <h2 key={i} className='punch-qanda-question'>
              <div className='punch-qanda-question-user-icon'>
              </div>
              <div className='punch-qanda-question-content'>
                <div className='punch-qanda-question-user-name'>
                  username
                </div>
                <div className='punch-qanda-question-time'>3:15</div>
                <div className='punch-qanda-question-text'>{comment}</div>
                <div className='punch-qanda-question-votes-container'>
                </div>
                <div className='punch-qanda-question-present'>
                </div>
                <div className="punch-qanda-question-votes-a11y" id=":3b">賛成票 2 票</div>
                <div className="punch-qanda-question-votes-a11y" id=":3c">反対票 1 票</div>
              </div>
            </h2>
          )
        })}
      </div>
    </>
  )
}

export default Usertool;