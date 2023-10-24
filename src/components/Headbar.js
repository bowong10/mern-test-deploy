import React from 'react'
import './Headbar.css'
// import PropTypes from 'prop-types'

const Headbar = ({title}) => {
  return (
    <div className='header'>{title} Headbar</div>
  )
}


Headbar.defaultProps = {
    title: "Default Title"
}

// Headbar.propTypes = {
//     title: propTypes.string.isRequired
// }

export default Headbar