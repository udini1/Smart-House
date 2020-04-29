import React, { Component } from 'react'
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import Room from './components/Room';
import RoomsList from './components/RoomsList';
import Devices from './components/Devices';
import history from './history';




export default class App extends Component {

state ={
  roomList:[{
    roomType:'Example Type',
    roomName:'Example Name',
    roomColor:'red',
    devices:[
      {name:'Example1', on: false}
    ]
  }
  ],
  roomIndex: '',
  
}

addRoomToList = (type, name, color) =>{
  this.setState({roomList:[...this.state.roomList,{roomType: type, roomName: name, roomColor: color , devices: []}]})
}

handleIndex = (i)=>{
this.setState({roomIndex: i})
}


// adding the item to the list
selectedItem=(roomName,roomIndex,device)=>{
  let newArr =  this.state.roomList.map(item => {
          if (item.roomName === roomName){
            let rightRoom = [...item.devices, {name: device, on: false}]
            item.devices = rightRoom;
          }
          return item
        })    
        this.setState({roomList: newArr})
}

// Using the normal way but s still replacing the roomList in new List
// let newArr =  this.state.roomList.map(item => {
//   if (item.roomName === roomName){
//     let rightRoom = [...item.devices, {name: device, on: false}]
//     item.devices = rightRoom;
//   }
//   return item
// })    
// this.setState({roomList: newArr})
// }



// Using JSON as 3rd party to make a copy and then replace the roomList 
  // let newRoomList = JSON.parse(JSON.stringify(this.state.roomList));
  // if (this.state.roomList[roomIndex].roomName === roomName){
  // // let newer = [...newRoomList[roomIndex].devices, {name: device, on: false}]
  //   newRoomList[roomIndex].devices.push({name: device, on: false});
  //   // newRoomList[roomIndex].devices[0].push({name: device, on:false});
  //   this.setState({roomList: newRoomList})
  // }
  

updateDeviceOnOff=(onOrOff, index)=>{
  let newRoomList = JSON.parse(JSON.stringify(this.state.roomList));
  if ( onOrOff === true ){
      newRoomList[this.state.roomIndex].devices[index].on = false;
  } else if (onOrOff === false) {
    newRoomList[this.state.roomIndex].devices[index].on = true;
  }
      this.setState({roomList: newRoomList})
      // console.log(onOrOff, index)
}

render(){
  // console.log('First Room Device on or off : ' +this.state.roomList[0].devices[0].on)
  console.log(this.state.roomList)
  // console.log(this.state.roomList[].devices)
  
  return (
    
    <div className="App">

    <Router history={history}>

      <NavigationBar/>
      <h1 id="smartHouseHeader">Smart House</h1>
        <Switch>

        <Route path="/" exact component={()=>{
          return ( <div>
              <div id="room_icons_section">
                {this.state.roomList.map((e,index) =>{
                return <RoomsList  roomName={e.roomName} roomType={e.roomType} roomColor={e.roomColor} index={index} indexFromRooms={this.handleIndex} history={history}/>
            })}
              </div>
              <HomePage/>
                </div>
                )
        }}
        />
        
        <Route path="/addroom" exact component={()=>{
          return <AddRoom addToList={this.addRoomToList} history={history}/>
        }}
        />
        <Route path="/room" exact component={()=>{
          return (
                <div> 
              <div>
             <Room roomList={this.state.roomList} devices={this.state.devices} index={this.state.roomIndex} item={this.selectedItem}  history={history} updateOnOff={this.updateDeviceOnOff}/>
             </div>
             {this.state.roomList[this.state.roomIndex].devices.map((element, index) =>{
              return <Devices item={element.name} on={element.on} index={index} updateOnOff={this.updateDeviceOnOff}/>
               })}
          </div>
          )
    }}
    />
        </Switch>


    </Router>
        </div>
  )
}
}
