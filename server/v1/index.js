import express from 'express'
import products from './products'
import users from './users'
import posts from './posts'
import comments from './comments'

const router = express.Router()

router.use('/products', products)
router.use('/users', users)
router.use('/posts', posts)
router.use('/comments', comments)

export default router
