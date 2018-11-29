import user from '../controller/user'
import db from '../db'
// import bcrypt from 'bcrypt'

const login = (req,res)=>{
    const {username,password} = req.body
    console.log(password);
    
    // var hash = bcrypt.hashSync(password)
    // console.log(hash);
    
    db.query('SELECT * FROM user WHERE username = ? and hash = ?',[username,password],(err,data)=>{
        if(err){
            res.status(500).json({
                success : false
            })
        }
        else{
            if(data.length > 0){
               req.session.user =  data[0]
               if(data[0].type == "1"){
                    req.session.save(() => {
                        res.json({
                            success : true,
                            type : '1'
                        })
                    })
               }
               else if(data[0].type == "2"){
                req.session.save(() => {
                    res.json({
                        success : true,
                        type : '2'
                    })
                })
                }
                else if(data[0].type == "3"){
                    req.session.save(() => {
                        res.json({
                            success : true,
                            type : '3'
                        })
                    })
               }
               
               
            }
            else{
                res.status(400).json({
                    success : false,
                    msg : 'Wrong username or password',
                })
            }
        }
    })
}


const logout = (req, res) => {
    // Check if request is logged in
    if (req.session.user) {
      req.session.destroy()
    }
  
    // Response logout success
    res.json({
      success: true
    })
  }
  
  
  // Middleware that check to ensure that the request is logged in
  const EnsureLogIn = (req, res, next) => {
    if (req.session.user) {
      // Already logged in call next middleware
      
      next()
    } else {
      // Not logged in yet send unauthorized to request
      console.log("Nope")
      res.status(401).json({
        success: false,
        msg: "Login require"
      })
  
    }
  }
  


export default{
    login,
    logout,
    EnsureLogIn
}