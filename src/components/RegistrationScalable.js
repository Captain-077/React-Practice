import React, { useState } from 'react'

export default function RegistrationScalable() {

    const [form, setForm] = useState({ Firstname: "", Lastname: "", Email: "", Password: "", PhoneNumber: "" });


    const handlechange = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({ ...prev, [name]: value }))

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="container flex flex-col w-1/3  my-40 mx-auto text-left">
                <h1>Sign up</h1>
                <p>Please fill in this form to create an account</p>

                <label htmlFor="firstname">
                    <b>First name</b>
                </label>
                <input type="text"
                    className='p-2 border-2'
                    name='Firstname'
                    placeholder='Enter firstname'
                    required
                    value={form.Firstname}
                    onChange={handlechange}
                />

                <label htmlFor="lastname">
                    <b>Last name</b>
                </label>
                <input type="text"
                    className='p-2 border-2'
                    name='Lastname'
                    placeholder='Enter Lastname'
                    required
                    value={form.Lastname}
                    onChange={handlechange}
                />


                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text"
                    className='p-2 border-2'
                    name='Email'
                    placeholder='Enter Email'
                    required
                    value={form.Email}
                    onChange={handlechange}
                />


                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password"
                    className='p-2 border-2'
                    name='Password'
                    placeholder='Enter password'
                    required
                    value={form.Password}
                    onChange={handlechange}
                />


                <label htmlFor="phoneNumber">
                    <b>Phone Number</b>
                </label>
                <input type="phone"
                    className='p-2 border-2'
                    name='PhoneNumber'
                    placeholder='Enter phone number'
                    required
                    value={form.PhoneNumber}
                    onChange={handlechange}
                />

                <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerBlue" }}> Terms & policy</a></p>

                <div className="clearfix">

                    <button type='submit' className='p-5 w-32 bg-black uppercase tracking-wide font-semibold text-white'> Signup</button>
                </div>

            </div>




        </form>
    )
}
