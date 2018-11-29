import db from '../db'

const getUserList = (req, res) => {
    db.query('SELECT * FROM user', (err, data) => {
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

const getUserByIndex = (req, res) => {
    const { index } = req.params
    db.query('SELECT * FROM user where id = ?', [index], (err, data) => {
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

const editData = (req, res) => {
    const { roomse, roomnum, firstname, lastname, tel,id } = req.body
    let query = db.query('UPDATE user SET firstname = ?, lastname = ?,tel = ?,id = ? WHERE roomse = ? and roomnum = ?', [firstname, lastname, tel,id,roomse,roomnum], (err) => {
        console.log(query.sql)
        if (err) {
            res.status(500).json({
                success: false
            })
        }
        else {
            res.json({
                success: true
            })
        }
    })
}


const editDataPro = (req, res) => {
    const { roomse, room, building, tel,lineID,email } = req.body
    let query = db.query('UPDATE user SET tel = ?,lineid = ?,email = ? WHERE roomse = ? and roomnum = ? and building = ?', [ tel,lineID,email,roomse,room,building], (err) => {
        console.log(query.sql)
        if (err) {
            res.status(500).json({
                success: false
            })
        }
        else {
            res.json({
                success: true
            })
        }
    })
}




  const createUser = (req, res) => {
    const { username, password, name } = req.body
    
    db.query('INSERT INTO users (username,password,name) VALUES (?,?,?)', [username, password, name], (err) => {
      if (err) {
        console.error(err)
        res.status(500).json({
          success: false
        })
      } else {
        res.json({
          success: true
        })
      }
    })
  }

export default {
    getUserList,
    createUser,
    getUserByIndex,
    editDataPro,
    //Userlist
    editData
}