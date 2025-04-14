
const db = require('../config/db.config');
bcrypt = require('bcrypt')

const createUser = async(username,email,password)=>{ 

const hashedPassword = await bcrypt.hash(password,10);

const result = await db.query('INSERT INTO users(username,email,password) VALUES($1,$2,$3) RETURNING * ',[username,email,hashedPassword]);
return result.rows[0];
    
}


const verifyUser = async (email,password)=>{

const result  = await db.query('SELECT * FROM users WHERE email=$1',[email]);
if(result.rows.length === 0)
{
    return {success:'false',message:'email not found'}
}
const user = result.rows[0];


const isMatch = await bcrypt.compare(password,user.password)
if(!isMatch)
{
    return {success:'false',message:'email not found'}
}
return {success:'true',user}
}



module.exports= {createUser, verifyUser}