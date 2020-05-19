import React, { Component} from "react"
import { render } from "@testing-library/react"

export default class Button extends Component{
    constructor (props){
      super(props)
      this.state ={
        counterClick: 0,
        counterOver: 0
      }
      // this.handleClick = this.handleClick.bind(this)
    }

    handleClick =() => {
      console.log('Me clickeo!')
      const {  counterClick } =  this.state
      this.setState({
        counterClick: counterClick + 1
      })
    }

    handlerOver = () => {
      console.log('Me clickeo!')
      const {  counterClick } =  this.state
      this.setState({
        counterClick: counterClick + 1
      })
    }

    render() {
      return(
        <div>
          <p>Llevas {this.state.counterClick} clicks</p>
          <button onClick={this.handleClick}>Click me!</button>
          <p onMouseOver= {this.handlerOver}>Estuvo sobre mi {this.state.counterOver}VECES</p>

        </div>
      )
    }
}