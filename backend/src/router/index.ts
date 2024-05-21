import express from 'express'
import User from './User'
import Auth from './Auth'
import File from './File'

const router = express.Router()

router.use('/user', User)
router.use('/auth', Auth)
router.use('/file', File)

export default router
