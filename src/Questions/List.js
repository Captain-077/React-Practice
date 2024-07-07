import React, { useState } from 'react'

export default function List({item,handleDelete,index}) {
    const [check, setCheck] = useState(false);
    const handlecheck = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <div className='flex justify-center items-center w-1/2 bg-blue-200 gap-10 rounded-full h-24'>
            <li><input className="form-check-input mx-2 p-5 inline-block w-5 scale-150" onClick={(e) => handlecheck(e)} type="checkbox" value id={item} />{item}</li>
            { check &&
            <button className={`p-4 w-30 text-xl text-white bg-red-900 rounded-full`} onClick={() => handleDelete(index)}>Delete</button>}
        </div>
    )
}
