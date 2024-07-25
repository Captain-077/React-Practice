import React, { useState } from 'react'

export default function RegistrationForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


    const handlechange = (e) => {

        const { name, value } = e.target
        // console.log(name)

        switch (name) {
            case "firstname":
                setFirstname(value);
                break;

            case "lastname":
                setLastname(value)
                break;

            case "email":
                setEmail(value)
                break;

            case "password":
                setPassword(value)
                break;

            case "phoneNumber":
                setPhoneNumber(value)
                break;

        }

    }


    const handleSubmit = (e) => {
        e.preventDefault(); 

        const formData = {
            Firstname:firstname,
            Lastname:lastname,
            email:email,
            password:password,
            phoneNumber:phoneNumber
        }
        console.log(formData)
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
                    name='firstname'
                    placeholder='Enter firstname'
                    required
                    value={firstname}
                    onChange={handlechange}
                />

                <label htmlFor="lastname">
                    <b>Last name</b>
                </label>
                <input type="text"
                    className='p-2 border-2'
                    name='lastname'
                    placeholder='Enter Lastname'
                    required
                    value={lastname}
                    onChange={(e) => handlechange(e)}
                />


                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input type="text"
                    className='p-2 border-2'
                    name='email'
                    placeholder='Enter Email'
                    required
                    value={email}
                    onChange={(e) => handlechange(e)}
                />


                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input type="password"
                    className='p-2 border-2'
                    name='password'
                    placeholder='Enter password'
                    required
                    value={password}
                    onChange={(e) => handlechange(e)}
                />


                <label htmlFor="phoneNumber">
                    <b>Phone Number</b>
                </label>
                <input type="phone"
                    className='p-2 border-2'
                    name='phoneNumber'
                    placeholder='Enter phone number'
                    required
                    value={phoneNumber}
                    onChange={(e) => handlechange(e)}
                />

                <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerBlue" }}> Terms & policy</a></p>

                <div className="clearfix">

                    <button type='submit' className='p-5 w-32 bg-black uppercase tracking-wide font-semibold text-white'> Signup</button>
                </div>

            </div>




        </form>
    )
}
