import React, { Component } from "react";

import "./ButtonEvent.css";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickButton: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { clickButton } = this.state
    this.setState({
      clickButton: !clickButton
    })
  }
  
  render() {
    const { clickButton } = this.state
    let square = null
    if (clickButton === true) {
      square = <div className='colorSquare'></div>
    }
    return(      
      <div className='container'>
        {square}
        <button onClick={this.handleClick}>Pushame!!</button>        
      </div>
    )
  }
}