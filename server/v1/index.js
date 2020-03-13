import express from 'express'
import products from './products'
import posts from './posts'

const router = express.Router()

router.use('/products', products)
router.use('/posts', posts)

export default router
