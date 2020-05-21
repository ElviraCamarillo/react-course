import React, { Component } from 'react'

import './CreditCard.css'

export default class CreditCards  extends Component{
  constructor(props){
    super(props)
    this.state = {
      number:'',
      name:'',
      expiry: '',
      cvv:''
    }
    this.handleInputChange =  this.handleInputChange.bind(this)
    // this.handleInputFocus = this.handleInputFocus.bind(this)
  }

  // handleInputFocus (event){
  //   this.setState({focus: event.target.name})

  // }

  handleInputChange({target: { name, value} }) {
    this.setState({
      [name]:value
    })
  }

  render(){
    
    return(
        
        <div className='card-form-container'>

          <h1 className="title-creditcard-component">
              Credit Card Component
          </h1>

          <form className='credit-card-data'>
              <label htmlFor="">Credit Card Number</label>
              <input
                value={this.state.number}
                onChange={this.handleInputChange}
                placeholder={'Target number'}
                name={'number'}
                maxLength="16"
              />
              <label htmlFor="">Name </label>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder={'Card name'}
                name={'name'}
              />
              <label htmlFor="">Expiration Date</label>
              <input
                value={this.state.expiry}
                onChange={this.handleInputChange}
                placeholder={'Mes/Año'}
                name={'expiry'}
              />
              <label htmlFor="">CVV</label>
              <input
                type="password"
                value={this.state.cvv}
                onChange={this.handleInputChange}
                placeholder={'CVV'}
                name={'cvv'}
                maxLength="4"
                minLength="3"
              />
          </form>

          <div className="credit-card">

            <div className="credit-card-type"></div>

            <div className="group-card">
              <span className="credit-card-label">Credit Card Number</span>
              <strong className="credit-card-number">
                {`${this.state.number.substring(0, 4)} ${this.state.number.substring(4, 8)}  ${this.state.number.substring(8, 12)}  ${this.state.number.substring(12, 16)}`}</strong>
            </div>

            <div className="group-card">
              <span className="credit-card-label">Name</span>
              <strong className="credit-card-expiration">{this.state.name} </strong>
            </div>
            
            <div className="group-card two-col">
              <div className=" middle">
                <span className="credit-card-label">Expiration Date</span>
                <strong className="credit-card-name">{this.state.expiry}</strong>
              </div>

              <div className=" middle">
                <span className="credit-card-label">CVV</span>
                <strong className="credit-card-cvv">{this.state.cvv}</strong>
              </div>
            </div>
            
          </div>

        </div>
    )
  }
}