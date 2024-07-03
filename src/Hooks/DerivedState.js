import React, { useState } from 'react'

export default function DerivedState() {
    const [users, setUsers] = useState([
        { name: "alice", age: 25, },
        { name: "bob", age: 30, },
        { name: "charlie", age: 35, }
    ])

    const userlen = users.length;
    // console.log(userlen);

    // derived state: users avegrage age
    const averageAge = users.reduce((acc, finalval) => {
       return acc += (finalval.age/userlen)

    }, 0)

    console.log(averageAge)
    return (
        <div>DerivedState</div>
    )
}
