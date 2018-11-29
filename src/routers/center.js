import { Router } from 'express'
import { Auth } from '../controller/auth'

const route = Router()

//User
route.use('/user',Auth.EnsureLogin())

export default routes