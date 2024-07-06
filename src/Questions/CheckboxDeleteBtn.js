import React, { useState } from 'react'

export default function CheckList() {
    const arr = ["play cricket", "Read a book", "Play video game"];
    const [list, setList] = useState(arr)
    console.log(list)

    const handleDelete = (target) => {
        console.log(target)
        const updatedlist = arr.filter((item, index) => {
            if (item !== target) {
                return item;
            }
        })
        console.log(updatedlist);
        setList(updatedlist);

    }


    return (
        <>
            <div className='flex flex-col items-center gap-10'> <h1>CheckList</h1>
                {
                    list.map((item) => {
                        return (
                            <div className='flex justify-center items-center w-1/2 bg-blue-200 gap-10 rounded-full h-24'>
                                <li><input className="form-check-input mx-2 p-5 inline-block w-5 scale-150" type="checkbox" value id="" />{item}</li>
                                <button className='p-4 w-30 text-xl text-white bg-red-900 rounded-full' onClick={() => handleDelete(item)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>



        </>
    )
}
