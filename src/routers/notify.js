import { Router } from 'express'
import notify from '../controller/notify'
import Auth from '../controller/auth'

const route = Router()

route.use('/',Auth.EnsureLogIn)
route.get('/show',notify.getData)
route.post('/edit',notify.editData)
route.post('/repairDATA',notify.repairDATA)
route.post('/doordt',notify.doordt)
route.post('/bedroomdt',notify.bedroomdt)
route.post('/toiletdt',notify.toiletdt)
route.post('/airdt',notify.airdt)
route.post('/elecdt',notify.elecdt)
route.post('/waterdt',notify.waterdt)
route.post('/airredt',notify.airredt)
route.post('/otherdt',notify.otherdt)
route.post('/getTime',notify.getTime)
route.post('/getWaterlist',notify.getTime)
route.post('/show_list',notify.show_list)
route.post('/buywater',notify.buywater)
route.post('/annoy',notify.annoy)

export default route
