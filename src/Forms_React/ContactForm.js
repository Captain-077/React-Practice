import React, { useState } from 'react'

export default function ContactForm() {

const [username,setUsername] = useState("");
const [Email,setEmail] = useState("");
const [message,setMessage] = useState("");


const handleSubmitData = (e) => {
    e.preventDefault();
    const UserData = {
        username,
        Email,
        message
    }
    console.log(UserData);
}


    return (
        <div className='text-left p-8 mx-auto my-20 w-2/4 shadow-xl'>
            <h1>Contact form</h1>
            <form onSubmit={handleSubmitData} className='flex flex-col'>
                <label htmlFor="Username">Username</label>
                <input className="border-4 p-3 my-2" type="text" value={username} onChange={(e) => setUsername(e.target.value)} name='Username' required />

                <label htmlFor="Email">Email</label>
                <input className="border-4 p-3 my-2" type="text" value={Email} onChange={(e) => setEmail(e.target.value)} name='Email' required />

                <label htmlFor="Message">Message</label>
                <textarea className="border-4 p-3 my-2" type="text" value={message} onChange={(e) => setMessage(e.target.value)} name='Message' required rows="6" />

                <button className='p-5 bg-blue-600 text-white w-32 text-xl font-bold' type='submit'>Login</button>
            </form>

        </div>
    )
}
