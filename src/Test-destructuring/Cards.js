import React from 'react'

function Cards(props) {
const {data} = props

  return (
    <>
    <h1>{data.name}</h1>
    <p>{data.address}</p>
    </>
  )
}

export default Cards