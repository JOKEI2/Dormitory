import {Router} from 'express'
import Room from './room'
import User from './user'
import notify from './notify'
import Auth from './auth'
import Bill from './bill'
import obj from './obj'

const router = Router()

console.log("eiei");
router.use('/room',Room)
router.use('/auth',Auth)
router.use('/user', User)
router.use('/notify',notify)
router.use('/bill',Bill)
router.use('/obj',obj)


export default router;