
const jwt = require('jsonwebtoken');
const {createUser, verifyUser} = require('../models/auth.model')


const secretkey = process.env.JWTSECRET;

const userRegister = async(req,res)=>{


    const {username, email ,password} = req.body;
    try{

   const user = await createUser(username,email,password);
   if(!user){
    
        throw new Error('Error creating User')
    

   }
   res.status(200).json({success:true,
    message:'User created succesfully'
   })
    }


    catch(err){
        console.error("User creation failed:", err); 
            res.status(500).json({success:false,message:'User creation failed'});
    }
   

   
}



const userLogin  = async (req,res)=>{
    const {email,password } = req.body;
    const {user} = await verifyUser(email,password);
    if(!user)
    {
        throw new Error('Failed to login'); 
    }
    const token = await jwt.sign({id:user.id,email:user.email,username:user.username},secretkey,{expiresIn:'1h'})

    res.cookie('token',token,{
        hhtpOnly:true,
        secure:true,
        sameSite:'None',
        maxAge:3600000
        
    })
    res.status(200).json({success:true,message:'Sucessfuly Logged In'})
}



module.exports = {userRegister, userLogin}