import db from '../db'

const getAllBill = (req,res) => {
    db.query('SELECT * FROM bill_list',(err,data) => {
        if(err){
            res.status(500).json({
                success: false
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

const getBillByIndex = (req,res) => {
    console.log(req.session.user.roomnum);
    
    let query = db.query('SELECT * FROM bill_list WHERE room = ?',[req.session.user.roomnum],(err,data) => {
        console.log(query.sql);
        
        if(err){
            res.status(500).json({
                success: false
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


const updateBill = (req,res) => {

}
const editBill = (req,res) => {
    const {rent,elecStart,elecEnd,electbill,waterStart,waterEnd,waterbill,roomnumber,building} = req.body
    var d = new Date();
    var month = new Array();
    month[0] = "ม.ค.";
    month[1] = "ก.พ.";
    month[2] = "มี.ค.";
    month[3] = "เม.ย.";
    month[4] = "พ.ค.";
    month[5] = "มิ.ย.";
    month[6] = "ก.ค.";
    month[7] = "ส.ค.";
    month[8] = "ก.ย.";
    month[9] = "ต.ค.";
    month[10] = "พ.ย.";
    month[11] = "ธ.ค.";
    var n = month[d.getMonth()];
    console.log(n);
    db.query('SELECT * FROM bill_list WHERE room = ?',[roomnumber],(err,data1) => {
        if(err){
            res.status(500).json({
                success: false
            })
        }
        else{
           if(data1.length > 0){
                db.query('SELECT * FROM bill_list WHERE month = ? ',[n],(err,data) => {
                    if(err){
                        res.status(500).json({
                            success: false
                        })
                    }
                    else{
                        if(data.length > 0){
                            let query = db.query('UPDATE bill_list SET total = ?,electStart = ?,electEnd = ?,electbill = ?,waterStart = ?,waterEnd = ?,waterbill =? WHERE month = ? and room = ? and building = ?',[rent,elecStart,elecEnd,electbill,waterStart,waterEnd,waterbill,n,roomnumber,building],(err) => {
                                console.log(query.sql);
                                if(err){
                                    res.status(500).json({
                                        success: false
                                    })
                                }
                                else{
                                    res.json({
                                        success: true,
                                        msg : "Update"
                                    })
                                }
                            })
                        }
                        else{
                            let query1 = db.query('INSERT INTO bill_list (month,waterStart,waterEnd,waterBill,electStart,electEnd,electBill,total,room,building) VALUES (?,?,?,?,?,?,?,?,?,?)',[n,waterStart,waterEnd,waterbill,elecStart,elecEnd,electbill,rent,roomnumber,building],(err) => {
                                console.log(query1.sql);
                                if(err){
                                    res.status(500).json({
                                        success: false
                                    })
                                }
                                else{
                                    res.json({
                                        success: true,
                                        msg : "INSERT"
                                    })
                                }
                            })
                        }
                    }
                })
           }
           else{
                db.query('INSERT INTO bill_list (month,waterStart,waterEnd,waterBill,electStart,electEnd,electBill,total,room,building) VALUES (?,?,?,?,?,?,?,?,?,?)',[n,waterStart,waterEnd,waterbill,elecStart,elecEnd,electbill,rent,roomnumber,building],(err) => {
                    if(err){
                        res.status(500).json({
                            success: false
                        })
                    }
                    else{
                        res.json({
                            success: true,
                            msg : "INSERT"
                        })
                    }              
                })
            }
        }
    })
    
}

export default{
    getAllBill,
    updateBill,
    editBill,
    getBillByIndex
}


