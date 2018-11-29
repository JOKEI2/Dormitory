import db from '../db'
import room from './room';

const editData = (req, res) => {
    console.log(req.body);
    // res.send(req.body);
    const {building, room, cleaning} = req.body
    // console.log(building);
    // console.log(room);
    // console.log(repair.electricity);
    // UPDATE notify SET electricity = 'true' ,  water = 'true' ,  airconditioner = 'true' ,  door = 'true' , other = 'true' where  building = 'A'and room = '101' ;
    let query = db.query('UPDATE notify SET bedroom = ? ,  toilet = ? ,  airconditioner = ?  where  building = ? and room = ? ', 
    [cleaning.bedroom , cleaning.toilet , cleaning.air , building , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}

const repairDATA = (req, res) => {
    console.log(req.body);
    // res.send(req.body);
    const {building, room, repair} = req.body
    // console.log(building);
    // console.log(room);
    // console.log(repair.electricity);
    // UPDATE notify SET electricity = 'true' ,  water = 'true' ,  airconditioner = 'true' ,  door = 'true' , other = 'true' where  building = 'A'and room = '101' ;
    let query = db.query('UPDATE notify SET electricity = ? ,  water = ? ,  airconditionerRe = ? ,  door = ? , other = ? where  building = ? and room = ? ', 
    [req.body.repair.electricity , req.body.repair.water , req.body.repair.air , req.body.repair.door , req.body.repair.other , req.body.building , req.body.room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}


const annoy = (req, res) => {
    // console.log('kiii'+req.body.building);
    // res.send(req.body);
    const {building, room, message} = req.body.annoy;
    console.log(building);
    console.log(room);
    console.log(message);

    // console.log(repair.electricity);
    // UPDATE notify SET electricity = 'true' ,  water = 'true' ,  airconditioner = 'true' ,  door = 'true' , other = 'true' where  building = 'A'and room = '101' ;
    let query = db.query('UPDATE notify SET  other = ? where room = ?', 
    [message,room], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}

const getData = (req, res) => {
    db.query('SELECT * FROM notify', (err, data) => {

        if (err) {
            console.error(err)
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

const getWaterlist = (req, res) => {
    const time = req.body.date;
    console.log('dddd' + time);
    db.query('SELECT * FROM water_list where date = ?',[time], (err, data) => {

        if (err) {
            console.error(err)
            res.status(500).json({
                success: false
            })
        } else {
            res.json({
                success: true,
                data
            })
            console.log(data.room)
        }
    })
}

const buywater = (req, res) => {
    const buff = req.body.building;
    console.log('dddd' + buff);
    // if(buff != 'A' && buff != 'b' && buff != 'c'){
    //     db.query('SELECT * FROM water_list where date = ?',[buff], (err, data) => {

    //         if (err) {
    //             console.error(err)
    //             res.status(500).json({
    //                 success: false
    //             })
    //         } else {
    //             res.json({
    //                 success: true,
    //                 data
    //             })
    //             console.log(data.room)
    //         }
    //     })
    // }
    
}



const getTime = (req, res) => {
    const time = req.body.date;

    console.log(time);
    db.query('SELECT * FROM water_list where date = ?',[time], (err, data) => {

        if (err) {
            console.error(err)
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

const show_list = (req, res) => {
    const time = req.body.date;
    console.log(req.body.date);
    
    console.log(time);
    let query = db.query('SELECT * FROM notify where bedroomdate = ? or toiletdate = ? or airconditionerdate = ? or electricitydate = ? or waterdate = ? or airconditionerRedate = ? or doordate = ? or otherdate = ?', [time,time,time,time,time,time,time,time],(err, data) => {
        // console.log(query.sql);
        
        if (err) {
            console.error(err)
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

const doordt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET doortime = ?,doordate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const bedroomdt = (req, res) => {
    console.log(req.body);
    const {date, room, time,bedroom} = req.body
    let query = db.query('UPDATE notify SET bedroomtime = ?,bedroomdate = ?,bedroom = ? where  room = ? ', 
    [time,date,bedroom , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}




const toiletdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET toilettime = ?,toiletdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const elecdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET electricitytime = ?, electricitydate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const waterdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET watertime = ?, waterdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const airredt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET airconditionerRetime = ?, airconditionerRedate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const otherdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET othertime = ?, otherdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                })
            }
        }
    })
}
const airdt = (req, res) => {
    console.log(req.body);
    const {date, room, time} = req.body
    let query = db.query('UPDATE notify SET airconditionertime = ?, airconditionerdate = ? where  room = ? ', 
    [time,date , room ], 
    (err, data) => {
        //console.log(query.sql)
        if (err) {
            console.log("fail");
            res.status(500).json({
                success: false
            })
        }
        else {
            if (data.length > 0) {
                req.session.user = data[0]
                req.session.save(() => {
                    res.json({
                        success: true,
                    })
                })
            }
            else {
                res.status(400).json({
                    success: false,
                    msg: 'Wrong username or password'
                }) 
            }
        }
    })
}

function sendline(msg){
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          bearer: 'dvR6TeBMQlqxEJDcRANBpTi6KyJlFMEWeEd9nTFLTbH', //token
        },
        form: {
          message: msg, //ข้อความที่จะส่ง
        },
      }, (err, httpResponse, body) => {
        if (err) {
          console.log(err)
        } else {
          console.log(body)
        }
      })
}


export default{
    editData,
    getData,
    repairDATA,
    doordt,
    bedroomdt,
    toiletdt,
    airdt,
    elecdt,
    waterdt,
    airredt,
    otherdt,
    getTime,
    getWaterlist,
    show_list,
    buywater,
    annoy
}