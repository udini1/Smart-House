import React, { Component } from 'react'

export default class RoomsList extends Component {

    state = {
        index: this.props.index
    }
    

    goToRoom=()=>{
        this.props.indexFromRooms(this.state.index)
        this.props.history.push('/room')
        
    }

    render(){
        
    return (
        <div>
            <div id="room_icons_homepage" onClick={this.goToRoom} style={{backgroundColor: this.props.roomColor}}>
            {/* <button id="room_icon" onClick={goToRoom}>{props.roomName}</button> */}
            <p id="room_icon">{this.props.roomName}</p>
            
            {/* <p>{props.roomType}</p> */}
            </div>
        </div>
    )
}
}
