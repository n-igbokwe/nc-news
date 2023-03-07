import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.scss'

function Navbar(){
  return (
    <nav>
        <ul className='ul-items'>
            <li className='li-items'>
              <Link className='orange' to="/">Home</Link>
              <Link to="/topics">Topics</Link>
              <Link to="/user">User</Link>
            </li>
        </ul>
        <div className="logo">
          <h1>NC-NEWS</h1>
        </div>
    </nav>
  )
}

export default Navbar