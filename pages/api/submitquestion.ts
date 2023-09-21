// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Data = {
  ok: boolean
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body);
  const data = JSON.parse(fs.readFileSync('./data/questions.json', 'utf-8'))
  const now = new Date();
  console.log(data);

  data.questions.push({...req.body, time: `${now.getHours()}:${now.getMinutes()}`})
  fs.writeFileSync('./data/questions.json', JSON.stringify(data))
  res.status(200).json({ ok: true })
}
