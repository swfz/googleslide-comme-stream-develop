// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

export type Question = {
  text: string;
  person: string;
  time: string;
}

type Data = {
  questions: Question[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = JSON.parse(fs.readFileSync('./data/questions.json', 'utf-8'))

  res.status(200).json({questions: data.questions.map(q => {
    return {
      text: q.text,
      person: q.anonymous ? "Anonymous" : q.person,
      time: q.time
    }
  })})
}
