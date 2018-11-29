import mysql from 'mysql'
const pool = mysql.createPool({
    host: "35.230.122.14",
    user: "root",
    password: "1234567890",
    database: "dormitory",
    multipleStatements: true,
    connectionLimit: 5
});

pool.on('connection',()=>{
    // console.log("YAY");
    
});

export default pool;