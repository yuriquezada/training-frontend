import express from 'express'
import { Get } from 'lib/Request'
const router = express.Router()
// axios

router.get('/', async (req, res) => {
  try {
    const data = await Get('https://jsonplaceholder.typicode.com/users')
    res.json({ data, success: true })
  } catch (error) {
    res.sendStatus(500).json({ success: false })
  }
})

router.get('/:id/posts', async (req, res) => {
  try {
    const { id } = req.params
    const data = await Get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    res.json({ data, success: true })
  } catch (error) {
    res.sendStatus(500).json({ success: false })
  }
})

export default router
