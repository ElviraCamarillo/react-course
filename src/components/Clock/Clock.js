import React, { Component} from "react";


export default class Clock extends Component {
  //  1. Se  ejecuta el mètodo constructor.
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      name: 'Elvira'
    }
  }
  // 3. Se ejecuta el setSate 
  componentDidMount(){
   this.dateInterval = setInterval(()=>this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.dateInterval)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }
//Se ejecuta el Render
  render() {
//   console.log('Desde el render')
    return (
      <div> 
        <p>Koder: {this.state.name}</p>
        <p>La hora actual es: {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

