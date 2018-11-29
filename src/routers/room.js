import { Router } from 'express'
import Room from '../controller/room'
import Auth from '../controller/auth'
const router = Router()

router.use('/',Auth.EnsureLogIn)
router.get('/acc',Room.getAcc)
router.get('/all',Room.getAllList)
router.get('/pro',Room.getProfile)
router.get('/',Room.getRoomList)
router.post('/room', Room.add)
router.post('/rent', Room.setRent)
router.post('/hiring', Room.editHiring)
router.post('/editAcc',Room.editAcc)



export default router