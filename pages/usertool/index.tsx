import type { NextPage } from 'next';
import { useState, ChangeEvent, useEffect } from 'react'
import { Question } from '../../types/question'

// 最初テキストエリアのみ
// フォーカスもしくはクリックでボタンとかが表示
// 匿名チェックボックス
// キャンセル、送信
// 送信はテキストエリアに値がある場合にActive
// mousedown, mouseupイベントで送信してる

const Usertool: NextPage = () => {
  const [hidden, setHidden] = useState<string>('hidden')
  const [questions, setQuestions] = useState<Question[]>([])
  const [anonymous, setAnonymous] = useState<boolean>(false)
  const [submittable, setSubmittable] = useState<boolean>(false)
  const [question, setQuestion] = useState<string>('')

  const handleAnonymous = (event) => {
    setAnonymous(event.target.checked)
  }

  const handleMouseDown = (event) => {
    console.log('mouse down')
  }

  const handleMouseUp = (event) => {
    console.log('mouse up')
    const postQuestion = async () => {
      const res = await fetch('/api/submitquestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          person: 'DummyUser',
          anonymous: anonymous,
          text: question,
        })
      })
      const data = await res.json()
      console.log(data)
    }
    postQuestion()
  }

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);

    if (event.target.value.length > 0) {
      setSubmittable(true)
    } else {
      setSubmittable(false)
    }
  }

  const handleQuestionFocus = (event) => {
    setHidden('')
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch('/api/questions')
      console.log(res);

      const data = await res.json()
      console.log(data);


      setQuestions(data.questions)
    }
    fetchQuestions()
  }, [questions])


  return (
    <>
      <div id="punch-ask-question-content">
        <textarea onFocus={handleQuestionFocus} onChange={handleQuestionChange} className=".punch-ask-question-submit-question-dialog-question-textarea"></textarea>
        <div hidden={hidden}>
          <input id="anonymous" type="checkbox" onClick={handleAnonymous} className="docs-material-gm-labeled-checkbox-checkbox" aria-checked={anonymous}></input>
          <label htmlFor="anonymous">匿名で質問する</label>
          <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="punch-ask-question-submit-button" disabled={!submittable}>Submit</button>
        </div>
      </div>


      <div className='punch-viewer-speaker-questions'>
        {questions.map((question: Question, i) => {
          return (
            <div key={i} className='punch-qanda-question'>
              <div className='punch-qanda-question-user-icon'>
              </div>
              <div className='punch-qanda-question-content'>
                <div className='punch-qanda-question-user-name'>
                  {question.person}
                </div>
                <div className='punch-qanda-question-time'>{question.time}</div>
                <div className='punch-qanda-question-text'>{question.text}</div>
                <div className='punch-qanda-question-votes-container'>
                </div>
                <div className='punch-qanda-question-present'>
                </div>
                <div className="punch-qanda-question-votes-a11y" id=":3b">賛成票 2 票</div>
                <div className="punch-qanda-question-votes-a11y" id=":3c">反対票 1 票</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Usertool;