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

      <div className='punch-ask-question-questions-list'>
        {comments.map((comment, i) => {
          return (
            <h2 key={i} className='punch-qanda-question punch-qanda-ask-question-add'>
              <div className='punch-qanda-question-user-icon'>
              </div>
              <div className='punch-qanda-question-content'>
                <div className='punch-qanda-question-user-name'>
                  username
                </div>
                <div className='punch-qanda-question-time'>3:15</div>
                <div className='punch-qanda-question-text'>{comment}</div>
                <div className='punch-qanda-question-votes-container'></div>
              </div>
            </h2>
          )
        })}
      </div>
    </>
  )
}

export default Usertool;