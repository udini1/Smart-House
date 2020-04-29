import React, { Component } from 'react'
import Devices from './Devices';


export default class Room extends Component {

    state ={
        index : this.props.index,
        roomName: this.props.roomList[this.props.index].roomName,
        roomType: this.props.roomList[this.props.index].roomType,
        selectItem:'',
    }


// display on and off for the item selection
addItemWindow=()=>{
    let addWindow = document.getElementById('add_item_window');
    if( addWindow.style.display === 'none'){
        addWindow.style.display = 'block'
    } else {
        addWindow.style.display = 'none'
    }
}

// set the selected item
handleSelection=(e)=>{
    this.setState({selectItem: e.target.value})
}


passItemsToApp=()=>{
    this.props.item(this.state.roomName, this.state.index ,this.state.selectItem)
}

addToItemList=()=>{
    this.passItemsToApp()
    this.addItemWindow()
}
// updateDeviceOnOff=(onOrOff)=>{
//     this.props.updateOnOff(onOrOff, this.state.index)
// }


render(){
    return (
        
        <div>
            
            <div id="roomNameAndType">
            <p>Room Name: {this.state.roomName}</p>
            <p>Room Type: {this.state.roomType}</p>
            {/* <p>bla bla : {props.roomList[index]}</p> */}
            </div>
            
        
            
            <button id="addItemBtn" onClick={this.addItemWindow}>Add Item</button>
            <div id="add_item_window">
                <select className="item_selection" defaultValue="" onChange={this.handleSelection}>
                    <option value=""  disabled hidden>Choose item</option>
                    <option value="Air Conditioner"> Air Conditioner </option>
                    <option value="Roof Boiler"> Roof Boiler </option>
                    <option value="Stereo System"> Stereo System </option>
                    <option value="Light Bolt"> Light Bolt </option>
                </select>
                <button id="add_btn" onClick={this.addToItemList}> Add</button>
            </div>
            {/* {this.props.roomList[this.state.index].devices.map((element, i) =>{
               return <Devices item={element.name} on={element.on}  key={i} updateOnOff={this.updateDeviceOnOff}/>
                })}             */}
        </div>
    )
}
}