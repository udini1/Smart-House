import React, { Component } from 'react'


export default class AddRoom extends Component {

    state = {
        roomType:'',
        roomName:'',
        roomColor:''
    }





handleRoomName=(e)=>{
    this.setState({roomName: e.target.value})
}

handleRoomColor=(e)=>{
    this.setState({roomColor: e.target.value})
    
}

handleRoomType=(e)=>{
    this.setState({roomType: e.target.value})
}



createRoomCheck=()=>{
    let selectRoom = document.getElementsByClassName('room_selection');
        for (let i = 0; i < selectRoom.length; i++) {
            if (selectRoom[i].value === "" || this.state.roomName === ""){
                alert('ERROR')
                // window.history.back()  // going back without refreshing page
                this.props.history.push('/');
        } else{
            this.props.addToList(this.state.roomType, this.state.roomName,this.state.roomColor)
            // window.history.back()
            this.props.history.push('/');
            
        }
    }  
}

render(){
    // console.log(this.state.roomName, this.state.roomColor, this.state.roomType)
    return (
        <div>
            <select defaultValue="" className="room_selection" placeholder="Chooose Room" onChange={this.handleRoomType}>
                {/* disable and hide a selection option to make some sort of
                placeholder for select element */}
                <option value=""  disabled hidden>Select a Room</option>
                <option value="Bedroom"> Bedroom </option>
                <option value="Kitchen"> Kitchen </option>
                <option value="Bathroom"> Bathroom </option>
            </select><br/>

            <input id="createRoomName" type="text" placeholder="Room Name" title="What to name the room"
             maxLength="5" onChange={this.handleRoomName}/><br/>
             <p id="chooseColor">Choose a color</p>
            <input type="color" id="createRoomColor" placeholder="Room Color" title="Which color will be the room?"
             onChange={this.handleRoomColor}/><br/>
             
             <button id="createRoomButton" onClick={this.createRoomCheck}>Create Room</button>

        </div>
    )
}
}
