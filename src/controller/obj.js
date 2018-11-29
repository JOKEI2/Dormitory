import db from '../db'

const getAll = (req, res) => {
    db.query('SELECT * FROM obj', (err, data) => {
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

// const editObj = (req,res) => {
//     const { building,roomnumber} = req.body

//     db.query('UPDATE obj SET ')
// }

const addObj = (req,res) => {
    const {building,roomnumber,obj,date } = req.body
    db.query('SELECT * FROM obj WHERE number = ? and date = ?',[obj,date],(err,data) => {
        if(err){
            console.error(err);
            res.status(500).json({
                success: false
            })
        }
        else {
            if(data.length == 0){
                let query = db.query('INSERT INTO obj (building,room,number,date) VALUES (?,?,?,?)',[building,roomnumber,obj,date],(err)=>{
                    console.log(query.sql);
                    if(err){
                        console.error(err);
                        res.status(500).json({
                            success: false,
                            msg : "Err Insert"
                        })
                    }
                    else{
                        res.json({
                            success: true
                        })
                    }
                })
            }
            else{
                let query1 = db.query('UPDATE obj SET date = ? WHERE building = ? and room = ? and number = ?',[date,building,roomnumber,obj],(err)=>{
                    console.log(query1.sql);
                    if(err){
                        console.error(err);
                        res.status(500).json({
                            success: false,
                            msg : "Err Up"
                        })
                    }
                    else{
                        res.json({
                            success: true
                        })
                    }
                })
            }
        }
        
    })
    
}

export default{
    getAll,
    addObj
}