import React from 'react'
import Cards from './Cards'

function Netflix() {

    const data = {
        name:"nakul",
        sportsTeam:"India",
        address:"Faridabad",
        }
        
  return (
    <Cards data = {data}/>
  )
}

export default Netflix