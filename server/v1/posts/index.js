import express from 'express'
import { Get } from 'lib/Request'
const router = express.Router()
// axios

router.get('/', async (req, res) => {
  try {
    const data = await Get('https://jsonplaceholder.typicode.com/posts')
    res.json({ data, success: true })
  } catch (error) {
    res.sendStatus(500).json({ success: false })
  }
})

export default router
