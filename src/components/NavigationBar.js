import React from 'react'
import {Link} from 'react-router-dom'

export default function NavigationBar() {
    return (
        <div className="navigation_bar">
            
            <Link style={{color: "white", textDecoration: 'none'}} to="/">
                <p>Home Page</p>
            </Link>

            <Link style={{color: "white", textDecoration: 'none'}} to="/AddRoom">
                <p>Add a room</p>
            </Link>

            {/* <Link style={{color: "white", textDecoration: 'none'}} to="/Room">
                <p>Room</p>
            </Link> */}
        </div>
    )
}
