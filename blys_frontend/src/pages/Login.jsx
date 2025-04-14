import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    
    const navigate = useNavigate();





const [method,setMethod] = useState('signin');
const [data,setData] = useState({
    username:'',
    email:'',
    password:''
})









const onSubmit = async (e) => {
    e.preventDefault(); 

   
    try {
      let response;
      if (method === 'signin') {
     
        response = await fetch(`${process.env.RENDERURL}/auth/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
            credentials: 'include',
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const result = await response.json();
  
        if (result.success) {
          console.log('Login successful:', result);
        setMethod('login');
        }
  

      } else {
       
        response = await fetch(`${process.env.RENDERURL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
            credentials: 'include',
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });
      }

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();

      if (result.success) {
        console.log('Login successful:', result);
        navigate('/tasks');
      }

    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center m-auto mt-20 flex-col gap-10 bg-black/60 backdrop-blur-[8px] 
      rounded-2xl shadow-glow p-10 w-[90%] max-w-md overflow-hidden">
      <div className='' >
        <h1 className='text-center text-[22px] text-white'>{method === 'signin' ? 'Sign In' :'Login'}</h1>
        <form onSubmit={onSubmit} className=''>
        {method === 'signin' && (
             <div className="">
                <label htmlFor="username" className='text-[12px] text-white'>Username</label>
                <br/>
                <input className='bg-transparent border border-green-200 outline-none rounded-[10px] p-2' type="text" name="username" id="username" placeholder="Enter your username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})} required/>
            </div>
            )}
                <div className="mt-[10px]">
                    <label htmlFor="email" className='text-[12px] text-white' >Email</label>
                <br/>

                    <input className='bg-transparent border border-green-200 outline-none rounded-[10px] p-2' type="email" name="email" id="email" placeholder="Enter your email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required/>
                </div>
                
            <div className="my-[10px]">
                <label htmlFor="password" className='text-[12px] text-white '>Password</label>
                <br/>

                <input className='bg-transparent border border-green-200 outline-none rounded-[10px] p-2' type="password" name="password" id="password" placeholder="Enter your password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required/>
            </div>
            <button  className='p-2 hover:text-orange-600 hover:bg-gray-900 border  rounded-[10px] text-white mt-4 ' type='submit'>{method === 'signin' ? 'Sign In' : 'Login'}</button>
        </form>
        <p className='text-white text-[12px] mt-4'>{method === 'signin' ? 'Already have an account?' : 'Don\'t have an account?'} <span className='text-green-200 cursor-pointer' onClick={() => setMethod(method === 'signin' ? 'login' : 'signin')}>{method === 'signin' ? 'Login' : 'Sign In'}</span></p>
      </div>
    </div>
  )
}

export default Login
