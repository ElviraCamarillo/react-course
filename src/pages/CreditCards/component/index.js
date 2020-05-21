import React, { Component } from 'react'

import './CreditCards.css'

export default class CreditCardData extends Component{
  constructor(props){
    super(props)
    this.state = {
      number:'',
      name:'',
      expiry: '',
      cvv:''
    }
    this.handlerInputNumberCard =  this.handlerInputNumberCard.handlerInputNumberCard.bind(this)
  }

  handlerInputNumberCard(event){
    
  }

  render(){
    const {number, name, expiry, cvc }  = this.state
    return(
      <div className='form-container'>
        <form>
            <input
            value={number}
            onChange={this.handlerInputNumberCard}
            placeholder={'Target number'}
            />
        </form>
      </div>
    )
  }
}
