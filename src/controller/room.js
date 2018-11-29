import db from '../db'

const add = (req, res) => {
    const {
        id,
        waterBill,
        electBill,
        alert
    } = req.body

    db.query('SELECT * FROM room WHERE waterBill = ? and electBill = ? and alert = ? ', [waterBill, electBill, alert], (err, data) => {
        if (err) {
            res.status(500).json({
                success: false
            })
        } else {
            req.session.room = data[0]
            req.session.save(() => {
                res.json({
                    success: true
                })
            })
        }
    })
}

// const getDetailByIndex = (req, res) => {
//     const {
//         index
//     } = req.params
//     db.query('SELECT * FROM room WHERE idroom = ?', [index], (err, data) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({
//                 success: false
//             })
//         } else {
//             res.json({
//                 success: true,
//                 data
//             })
//         }
//     })
// }

const getRoomList = (req, res) => {
    db.query('SELECT * FROM room', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: false
            })
        } else {
            res.json({
                success: true,
                data
            })
        }
    })

}

const getAllList = (req, res) => {
    db.query('SELECT roomR.*,U1.* FROM room AS roomR INNER JOIN user AS U1 ON roomR.user1 = U1.iduser', (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                success: false
            })
        } else {
            db.query('SELECT U1.* FROM room AS roomR INNER JOIN user AS U1 ON roomR.user2 = U1.iduser', (err, result1) => {
                for (let i = 0; i < result.length; i++) {
                    let keys = Object.keys(result1[0])
                    for (let j = 0; j < keys.length; j++) {
                        result[i][keys[j] + '_2'] = result1[i][keys[j]]
                    }
                }
                db.query('SELECT n.* FROM room AS roomR INNER JOIN notify AS n ON roomR.roomnumber = n.room', (err, result2) => {
                    for (let k = 0; k < result.length;k++){
                        let keys1 = Object.keys(result2[0])
                        for (let l = 0; l < keys1.length; l++) {
                            result[k][keys1[l]] = result2[k][keys1[l]]
                        }
                    }
                    res.json({
                        success: true,
                        data: result
                    })
                })
                
            })


        }
    })

}

const editHiring = (req,res)=>{
    const{ building,room,hiringStatus,customerFirst,customerSecond,request,paymentStatus,rent,obj } = req.body.customer
    db.query('UPDATE user SET firstname = ?,lastname = ?,tel = ?,id = ? WHERE roomse = ? and roomnum = ?',[customerFirst.firstname,customerFirst.lastname,customerFirst.tel,customerFirst.id,"1",room],(err) => {
        if(err){
            res.status(500).json({
                success: false
            })
        }
        else{
            db.query('UPDATE user SET firstname = ?,lastname = ?,tel = ?,id = ? WHERE roomse = ? and roomnum = ?',[customerSecond.firstname,customerSecond.lastname,customerSecond.tel,customerSecond.id,"2",room],(err) => {
                if(err){
                    res.status(500).json({
                        success: false
                    })
                }
                else{
                   db.query('UPDATE room SET hiringStatus = ?,paymentStatus = ?,rate = ?,total = ?,electStart = ?,electEnd = ?,waterStart = ?,waterEnd = ?,otherCost = ?,electbill = ?,waterbill = ?,account = ?,accountname = ?,alertMsg = ?,alertBuilding = ?,alertRoom = ? WHERE building = ? and roomnumber = ?',[hiringStatus,paymentStatus,rent.rates,0,rent.elecStart,rent.elecEnd,rent.waterStart,rent.waterEnd,rent.otherBill,0,0,"","",request.annoy.message,request.annoy.building,request.annoy.room,building,room],(err) => { 
                        if(err){
                            res.status(500).json({
                                success: false
                            })
                        }
                        else{
                            db.query('UPDATE notify SET bedroom = ? ,toilet = ?,airconditioner = ?,electricity = ?, water = ?, airconditionerRe = ?,door = ?,other = ?   WHERE building = ? and room = ?',[request.clean.bedroom,request.clean.toilet,request.clean.airConditioner,request.repair.electricity,request.repair.water,request.repair.airConditioner,request.repair.door,request.repair.other,building,room],(err) => { 
                                if(err){
                                    res.status(500).json({
                                        success: false
                                    })
                                }
                                else{
                                    res.json({
                                        success: true,
                                        msg: "yay"
                                    })
                                }
                            })
                        }
                    }) 
                }
            })
        }
    })
    
      
}


const getProfile = (req,res) => {

    
    db.query('SELECT U1.*,room.roomnumber,room.account,room.accountname,room.electbill,room.electStart,room.electEnd,room.waterbill,room.waterStart,room.waterEnd,room.rate,room.otherCost,room.total FROM room  INNER JOIN user AS U1 ON room.roomnumber = ? and U1.roomnum = ? and U1.iduser = room.user1',[req.session.user.roomnum,req.session.user.roomnum], (err, result) => {
        if (err) {
            res.status(500).json({
                success: false
            })
        } else {

            db.query('SELECT U1.* FROM room AS roomR INNER JOIN user AS U1 ON roomR.roomnumber = ? and U1.roomnum = ? and U1.iduser = roomR.user2', [req.session.user.roomnum,req.session.user.roomnum],(err, result1) => {
                for (let i = 0; i < result.length; i++) {
                    let keys = Object.keys(result1[0])
                    for (let j = 0; j < keys.length; j++) {
                        result[i][keys[j] + '_2'] = result1[i][keys[j]]
                        
                    }
                }

                
                res.json({
                    success: true,
                    data: result
                })
                
            })
            
            

        }
    })
}


const setRent = (req,res) => {
    const {rent,rates,elecStart,elecEnd,electbill,waterStart,waterEnd,waterbill,otherBill,roomnumber,building} = req.body
    db.query('UPDATE room SET total = ?,rate = ?,electStart = ?,electEnd = ?,electbill = ?,waterStart = ?,waterEnd = ?,waterbill =?,otherCost = ?  WHERE building = ? and roomnumber = ?',[rent,rates,elecStart,elecEnd,electbill,waterStart,waterEnd,waterbill,otherBill,building,roomnumber],(err) => { 
        if(err){
            res.status(500).json({
                success: false
            })
        }
        else{
            res.json({
                success: true,
                msg: "yay"
            })
        }
    })
}

const getAcc = (req,res) => {
    db.query('SELECT account,accountname FROM room WHERE roomnumber = "101"',(err,data) => {
        if(err){
            res.status(500).json({
                success : false
            })
        }
        else{
            res.json({
                success: true,
                data
            })
        }
    })
}


const editAcc = (req,res) => {
    const { account,accountname } = req.body
    db.query('UPDATE room SET account = ? , accountname = ?  WHERE roomnumber = ?',[account,accountname,req.session.user.roomnum],(err,data) => {
        if(err){
            res.status(500).json({
                success : false
            })
        }
        else{
            res.json({
                success: true,
                data
            })
        }
    })
}



export default {
    add,
    // getDetailByIndex,
    getRoomList,
    getAllList,
    editHiring,
    setRent,
    getAcc,
    getProfile,
    editAcc
}