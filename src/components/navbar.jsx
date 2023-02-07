import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='Nav'>
      <Link to="/">
        Home    </Link>
      <Link to="/topics">
            Topics      </Link>
      <Link to="/user">
             User      </Link>

    </nav>
  )
}

export default Navbar