import {Router} from 'express'
import auth from '../controller/auth'

const router = Router()
router.post('/login',auth.login)
router.post('/logout',auth.logout)

export default router