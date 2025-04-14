const pkg = require('pg')
require('dotenv').config()
const {Pool} = pkg




const pool  = new Pool({
   user:process.env.USER,
   host:process.env.HOST,
   password:process.env.PASSWORD,
   port:process.env.DBPORT,
   database:process.env.DATABASE

})



pool.on('connect',()=>{
    console.log("Database connected sucessfully");
})



module.exports  =  pool ;