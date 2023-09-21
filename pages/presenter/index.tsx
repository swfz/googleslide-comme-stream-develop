import type { NextPage } from 'next'
import { useState, ChangeEvent, useEffect } from 'react'
import { Question } from '../../types/question'

const Presenter: NextPage = () => {
  const [questions, setQuestions] = useState<Question[]>([])
  const [pageNumber, setPageNumber] = useState<number>(0)
  const bc = new BroadcastChannel('slide-page');

  useEffect(() => {
    const getQuestions = async () => {
      const res = await fetch('/api/questions')
      const data = await res.json()

      setQuestions(data.questions)
    }
    getQuestions()
  }, [questions])

  const decr = () => {
    setPageNumber(pageNumber - 1)
    bc.postMessage({ number: pageNumber })
  }

  const incr = () => {
    setPageNumber(pageNumber + 1)
    bc.postMessage({ number: pageNumber })
  }

  return (
    <>
      <div>
        <button onClick={decr}>-</button>
        <button onClick={incr}>+</button>
      </div>
      <div className='punch-viewer-speaker-questions'>
        {questions.map((question, i) => (
          <div key={i} className='punch-qanda-question'>
            <div className='punch-qanda-question-user-name'>
              {question.person}
            </div>
            <div className='punch-qanda-question-time'>
              {question.time}
            </div>
            <div className='punch-qanda-question-text'>
              {question.text}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Presenter;