import React, { useState } from 'react'

export default function LoginForm() {

const [user,setUser] = useState({Username:"",Password:""});


const handleChange = (event) => {
    const {name,value} = event.target
    setUser((prev) =>({...prev,[name]:value}) )
}

const handleData = (event) => {
event.preventDefault();
console.log(user)


} 


  return (

    <div className='text-left mx-auto my-20 w-2/4'>
    <h1>LoginForm</h1>
    <form action="" className='flex flex-col'>
    <label htmlFor="Username">Username</label>
    <input className="border-4 p-3 my-2" type="text" value={user.Username} onChange={handleChange} name='Username' required />
    <label htmlFor="Password">Password</label>
    <input className="border-4 p-3 my-2" type="password" value={user.Password} onChange={handleChange} name='Password' required/>
    <button className='p-5 bg-blue-600 text-white w-32 text-xl font-bold' onClick={handleData} type='submit'>Login</button>
    </form>

    </div>
  )
}
