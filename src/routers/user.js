import { Router } from 'express'
import User from '../controller/user'
import Auth from '../controller/auth'

const route = Router()

route.get('/', User.getUserList)
route.get('/:index', User.getUserByIndex)
route.use('/',Auth.EnsureLogIn)
route.post('/edit',User.editData)
route.post('/editP',User.editDataPro)


export default route
