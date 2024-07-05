import React from 'react'

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

  return (
    <>
    <div>Make a multi option double drop down</div>
    <select name="cities" id="">
       { countries.map((item,index) => {
           return <option value="">{item.name}</option>
        })

    }
        
    </select>


    <select name="cities" id="">
       { countries.map((item,index) => {
           return <option value="">{item.cities}</option>
        })

    }
        
    </select>
    </>
  )
}
