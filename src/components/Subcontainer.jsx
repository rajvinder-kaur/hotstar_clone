import React from 'react'
import { Link } from 'react-router-dom'

function Subcontainer({prop}) {
  return (
       <div className="subcontainer">
      <Link>{prop.one}</Link>
      <Link>{prop.two}</Link>
      <Link>{prop.three}</Link>
      <Link>{prop.four}</Link>
      </div>
  )}

export default Subcontainer
