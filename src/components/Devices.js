import React, { Component} from 'react'

export default class Devices extends Component {

    state = {
       index : this.props.index,
       onOrOff: this.props.on,
       backgroundColor: ''
    }
    

    onAndOff=()=>{
    
        if (this.state.onOrOff === false){    
            this.setState({onOrOff: true})
            this.props.updateOnOff(this.state.onOrOff, this.state.index)
        } else {
            this.setState({onOrOff: false})
            this.props.updateOnOff(this.state.onOrOff,this.state.index)
        }
        
    }

    changeColor=()=>{
        if (this.state.onOrOff == false){
            return 'red'
        } else {
            return 'green'
        }
    }
render(){
    
    // console.log('device on or off' +this.state.onOrOff)
    // console.log(this.state.backgroundColor)
        return (
            <div>
                
                <div id="item" style={{backgroundColor: this.changeColor()}} onClick={this.onAndOff}>{this.props.item}</div>
                {/* {this.state.background.toString()} */}
                {/* {this.onAndOff()} */}
            </div>
        )
    }
}

// onClick={()=>this.setState(!this.state.background)}

