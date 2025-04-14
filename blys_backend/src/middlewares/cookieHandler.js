const jwt = require('jsonwebtoken');
const secretKey= process.env.JWTSECRET




const cookieHandler =async (req,res,next) =>{
const token = req.cookies.token;
if(!token){
    return res.status(404).json({
        message:'Unauthorized Request no token'
    })



}
try{

    const payload =await jwt.decode(token,secretKey);
    console.log(payload);
    req.user = payload;
    next();
}

catch(err){
    throw new Error('Invalid Token',err);
}

}


module.exports = cookieHandler