import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage(props) {
    
// const showSection=()=>{
// if (props.roomList.roomName != ""){
//     document.getElementById('room_icons_homepage').style.display = 'block'
// }
// }

    return (
        <div> 
            <Link to="/AddRoom">
                <button id="goToAddRoom" title="Add a Room"> + </button>
            </Link>
        </div>
    )
}
