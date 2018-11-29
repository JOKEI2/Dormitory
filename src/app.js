import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import api from './routers/api'

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

// app.get('*',function(req,res,next){
//     console.log(req.session);
    
//     if(req.session.user){
//         next()
//     }
//     else{
//         console.log("yay");
        
//         res.redirect("/login.html")
//     }
// })
app.use('/', express.static('./public'))
app.use('/api', api)

app.listen(8081, () => {
    console.log('Server OK');
})

