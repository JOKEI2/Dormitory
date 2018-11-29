import { Router } from 'express'
import bill from '../controller/bill'

const route = Router()


route.patch('/edit',bill.editBill)
route.get('/roo', bill.getBillByIndex)
route.get('/all', bill.getAllBill)



export default route