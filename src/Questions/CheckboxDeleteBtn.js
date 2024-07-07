import React, { useState } from 'react'
import List from './List';

export default function CheckList() {
    const arr = ["play cricket", "Read a book", "Play video game"];
    const [list, setList] = useState(arr);
   

    const handleDelete = (target) => {
        console.log(target);

        let newArr = list
        const updatedlist = newArr.filter((item, index) => {
            if (item !== target) {
                return item !== target
            }
        })
        console.log(updatedlist);
        setList(updatedlist);
    }

    // const handlecheck = (i) => {

    //   let boxarr = list
    //     const checkupdate = boxarr.filter((item,index) => {
    //         if (i == index){
    //             setCheck(!check)
    //         }
          
    //     })
    //     // console.log(checkupdate)
    //     // // setCheck(checkupdate)
    // }



    return (
        <>
            <div className='flex flex-col items-center gap-10'> <h1>CheckList</h1>
                {
                    list.map((item,index) => {
                        return (
                           <List item={item} index={index} handleDelete={handleDelete}/>
                        )
                    })
                }

            </div>



        </>
    )
}
