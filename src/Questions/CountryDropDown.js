import React, { useState } from 'react'

export default function DropDown() {

    

    const countries = [
        { name: 'India', value: 'IN', cities:[
          'Delhi',
          'Mumbai'
        ] },
        { name: 'Pak', value: 'PK',cities:[
          'Lahore',
          'Karachi'
        ] },
        { name: 'Bangladesh', value: 'BG', cities:[
          'Dhaka',
          'Chittagong'
        ] },
      ];

      const [country,setCountry] = useState(0);

      const handlechange = (event) => {
        setCountry(event.target.value)
      } 

  return (
    <>
    <div>Make a multi option double drop down</div>
    <select name="countries" id="" onChange={(e) => handlechange(e)}>
       { countries.map((item,index) => {
           return <option value={index}>{item.name}</option>
        })

    }
        
    </select>


    <select name="countries" id="">
       { countries[country].cities.map((item) => {
           return <option value="">{item}</option>
        })

    }
        
    </select>
    </>
  )
}
