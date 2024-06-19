import React from 'react'
import PropTypes from 'prop-types'

function Comp({name,age}) {
  return `In 5 years ${name} will be ${age+5}`
  
}
Comp.propTypes = {
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired
}



export default Comp